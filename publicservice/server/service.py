class Service:

    def __init__(self, rowid, name, enabled):
        """Service constructor

        @param rowid Row ID for Service entry in database OR None
        @param name Service name
        @param enabled Boolean indicating if the Service is enabled
        """
        self.rowid = rowid
        self.name = name
        self.enabled = enabled
