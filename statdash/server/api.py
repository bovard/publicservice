import cherrypy
import json


def getdict(obj):
    """Returns an object's __dict__ (used to traverse a list of objects for json.dumps())
    """
    if obj.__dict__:
        return obj.__dict__
    return obj


class ServicesREST(object):
    """Handler for REST operations on /services
    """
    exposed = True

    def __init__(self):
        pass

    @cherrypy.tools.accept(media='text/plain')
    @cherrypy.tools.json_out()
    def GET(self):
        db = cherrypy.thread_data.db
        services = db.get_services()
        return json.dumps(services, default=getdict)


class API(object):
    """Root handler for the REST API
    """
    exposed = True

    def __init__(self):
        conf = {
            '/': {
                 'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
                 'tools.sessions.on': True,
                 'tools.response_headers.on': True,
                 'tools.response_headers.headers': [('Content-Type', 'text/plain')],
            },
        }

        self.services = ServicesREST()
        cherrypy.tree.mount(self, '/api', conf)