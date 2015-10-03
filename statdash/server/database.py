import sqlite3
from functools import wraps
from threading import RLock

from service import Service
from incident import Incident


def commitandrollback(f):
    """Adds db_cursor() to f call and executes commit and rollback
    """
    @wraps(f)
    def wrapper(self, *args, **kwargs):
        with self._lock:  # Threading lock
            with self._db:  # Auto commit and rollback on exception
                return f(self, self._db.cursor(), *args, **kwargs)
    return wrapper


class Db(object):
    """Database for storing persistent data.

    This will check for an existing SQLite3 database or initiate a new one."""

    def __init__(self, dbfile):
        self._lock = RLock()
        self._db = sqlite3.connect(dbfile)
        c = self._db.cursor()

        try:
            c.execute("SELECT rowid FROM service LIMIT 1")
        except sqlite3.OperationalError:
            self.create_tables()
        finally:
            c.close()

    @commitandrollback
    def create_tables(self, c):
        """Creates tables for a new database.
        """
        c.execute('''
                    CREATE TABLE service
                    (name TEXT NOT NULL,
                    enabled INTEGER DEFAULT 1)
                  ''')

        c.execute('''
                    CREATE TABLE incident
                    (servicerowid INTEGER,
                    title TEXT NOT NULL,
                    opened INTEGER NOT NULL,
                    closed INTEGER DEFAULT NULL,
                    FOREIGN KEY(servicerowid) REFERENCES service(rowid) ON DELETE CASCADE)
                  ''')

        c.execute('''
                    CREATE TABLE incident_update
                    (incidentrowid INTEGER,
                    status TEXT NOT NULL,
                    description TEXT NOT NULL,
                    timestamp INTEGER NOT NULL,
                    FOREIGN KEY(incidentrowid) REFERENCES incident(rowid) ON DELETE CASCADE)
                  ''')

    # Service methods

    @commitandrollback
    def add_service(self, c, service):
        """Adds a new service to the database.
        """
        c.execute("INSERT OR REPLACE INTO service(name) VALUES (?)", (service.name,))

    @commitandrollback
    def disable_service(self, c, service):
        """Disables a service in the database.
        """
        c.execute("INSERT OR REPLACE INTO service(name) VALUES (?)", (service.rowid,))

    @commitandrollback
    def _get_services(self, c):
        return c.execute("SELECT rowid, name, enabled FROM service")

    def get_services(self):
        """Retrieve an array of all services in the database.
        """
        services = []
        for rowid, name, enabled in self._get_services():
            services.append(Service(rowid, name, enabled))
        return services

    # Incident methods

    @commitandrollback
    def add_incident(self, c, service, incident):
        """Adds a new incident to the database.
        """
        c.execute("INSERT OR REPLACE INTO incident(servicerowid, title, opened, closed)"
                  "VALUES (?, ?, ?, ?)", (service.rowid, incident.title, incident.opened, incident.closed))

    @commitandrollback
    def _get_incidents(self, c, service):
        return c.execute("SELECT rowid, servicerowid, title, opened, closed FROM incident "
                         "WHERE servicerowid = ?", (service.rowid,))

    def get_incidents(self, service):
        """Retrieve an array of all incidents for a service.
        """
        incidents = []
        for rowid, servicerowid, title, opened, closed in self._get_incidents(service):
            incidents.append(Incident(rowid, servicerowid, title, opened, closed))
        return incidents
