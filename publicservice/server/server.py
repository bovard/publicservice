import os
import cherrypy
from database import Db

from dashboard import Dashboard
from api import API

__DIR__ = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))


def connectdb(thread_index):
    cherrypy.thread_data.db = Db(__DIR__ + '/database.sqlite3')

# Tell CherryPy to call "connectdb" for each thread, when it starts up
cherrypy.engine.subscribe('start_thread', connectdb)

Dashboard(__DIR__)
API()

cherrypy.engine.start()
cherrypy.engine.block()
