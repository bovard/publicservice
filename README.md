## Public Service

Public Service will be a customizable service status dashboard and incident tracker.

## Requirements

* Python
    * CherryPy
    * PyReact
* SQLite3

## Installation & Usage

1. Download at least ```publicservice```, ```static```, and ```templates```.
2. Run ```python publicservice/server/server.py```.
3. Open ```127.0.0.1:8080/``` in a web browser.

## Development Requirements

* ```npm install```
* See ```package.json```

## TODO

* Unit testing
* Validation (everywhere!)
* Remaining API methods
    * /api/service/\<service-id\> (~~GET~~, PATCH, DELETE)
    * /api/incident (GET, POST)
    * /api/incident/\<incident-id\> (GET, PATCH, DELETE)
* Handling for incident updates
* Remaining React components
