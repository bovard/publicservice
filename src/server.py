import cherrypy

__DIR__ = '/home/cdubz/PycharmProjects/StatDash/'


class StatDash(object):
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

    mockup = StatDash()
    cherrypy.quickstart(mockup, '/', conf)