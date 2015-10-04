import cherrypy
import json

from service import Service

def getdict(obj):
    """Returns an object's __dict__ (used to traverse a list of objects for json.dumps())
    """
    if obj.__dict__:
        return obj.__dict__
    return obj


class ServiceREST(object):
    """Handler for REST operations on /services
    """
    exposed = True

    def __init__(self):
        pass

    @cherrypy.tools.accept(media='text/plain')
    # TODO Look in to using json_out() correctly.
    # @cherrypy.tools.json_out()
    @cherrypy.popargs('rowid')
    def GET(self, rowid=None):
        db = cherrypy.thread_data.db
        if rowid is None:
            services = db.get_services()
        else:
            services = db.get_services(rowid)
        return json.dumps(services, default=getdict)

    def POST(self, name):
        db = cherrypy.thread_data.db
        rowid = db.add_service(Service(None, name, 1))
        return json.dumps({'rowid': rowid})


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

        self.service = ServiceREST()
        cherrypy.tree.mount(self, '/api', conf)
