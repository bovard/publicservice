React = require('react');
ReactBootstrap = require('react-bootstrap');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

Header = require('./components/Header.jsx');
var App = require('./components/App.jsx');
var Admin = require('./components/Admin.jsx');
var Dashboard = require('./components/Dashboard.jsx');
var Incidents = require('./components/Incidents.jsx');

React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="dashboard" component={Dashboard} />
            <Route path="incidents" component={Incidents} />
            <Route path="admin" component={Admin} />
        </Route>
    </Router>
    ), document.getElementById('main')
);