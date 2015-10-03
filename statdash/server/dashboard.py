import cherrypy


class Dashboard(object):

    def __init__(self, basedir):
        self.basedir = basedir
        conf = {
            '/': {
                'tools.sessions.on': True,
                'tools.staticdir.root': basedir
            },
            '/static': {
                'tools.staticdir.on': True,
                'tools.staticdir.dir': './static'
            },
        }

        cherrypy.tree.mount(self, '/', conf)

    @cherrypy.expose
    def index(self):
        return open(self.basedir + '/templates/app.html')


    @cherrypy.expose
    def mockup(self):
        return open(self.basedir + '/templates/mockup.html')