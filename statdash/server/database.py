import sqlite3

from service import Service


class Db(object):
    """Database for storing persistent data.

    This will check for an existing SQLite3 database or initiate a new one."""

    def __init__(self, dbfile):
        self._db = sqlite3.connect(dbfile)
        c = self._db.cursor()

        try:
            c.execute("SELECT rowid FROM service LIMIT 1")
        except sqlite3.OperationalError:
            self.create_tables()

    def create_tables(self):
        """Creates tables for a new database.
        """
        c = self._db.cursor()
        c.execute('''
                    CREATE TABLE service
                    (name TEXT NOT NULL,
                    enabled INTEGER DEFAULT 1)
                  ''')

        c.execute('''
                    CREATE TABLE incident
                    (servicerowid INTEGER,
                    subject TEXT NOT NULL,
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

    def add_service(self, name):
        """Adds a new service to the database.
        """
        c = self._db.cursor()
        c.execute("INSERT OR REPLACE INTO service(name) VALUES (?)", (name,))

    def disable_service(self, service):
        """Disables a service in the database.
        """
        c = self._db.cursor()
        c.execute("INSERT OR REPLACE INTO service(name) VALUES (?)", (service.rowid,))

    def _get_services(self):
        c = self._db.cursor()
        return c.execute("SELECT name, enabled FROM service")

    def get_services(self):
        """Retrieve an array of all services in the database.
        """
        services = []
        for name, enabled in self._get_services():
            services.append(Service(name, enabled))
        return services
