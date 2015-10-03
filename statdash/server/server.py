import os
import cherrypy

from database import Db

__DIR__ = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))


class StatDash(object):

    def __init__(self):
        self.db = Db(__DIR__ + '/database.sqlite3')

    @cherrypy.expose
    def index(self):
        return open(__DIR__ + '/templates/app.html')


    @cherrypy.expose
    def mockup(self):
        return open(__DIR__ + '/templates/mockup.html')


if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': __DIR__
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './static'
        },
    }

    app = StatDash()
    cherrypy.quickstart(app, '/', conf)
