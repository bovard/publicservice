import time


class Incident:

    def __init__(self, rowid, servicerowid, title, opened=time.time(), closed=None):
        """Incident constructor

        @param rowid Row ID for Incident entry in database
        @param servicerowid Row ID for parent Service entry
        @param title Incident title
        @param opened Incident open date/time in unixtime
        @param closed Incident close date/time in unixtime
        """
        self.rowid = rowid
        self.servicerowid = servicerowid
        self.title = title
        self.opened = opened
        self.closed = closed
