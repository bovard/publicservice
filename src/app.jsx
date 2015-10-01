var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <Navbar brand="Stat‒" inverse toggleNavKey={0}>
                    <Nav right eventKey={0}>
                        <NavItem eventKey={1} href="#/dashboard">Dashboard</NavItem>
                        <NavItem eventKey={2} href="#/incidents">Incidents</NavItem>
                        <NavItem eventKey={3} href="#/admin">Admin</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
});

var StatDash = React.createClass({
    render: function() {
        return (
            <Header />
        );
    }
});

var Admin = React.createClass({
    render: function() {
        return (
            <Header />
        );
    }
});

var Incidents = React.createClass({
    render: function() {
        return (
            <Header />
        );
    }
});

React.render((
    <Router>
        <Route path="/" component={StatDash}>
            <Route path="/dashboard" component={StatDash} />
            <Route path="/incidents" component={Incidents} />
            <Route path="/admin" component={Admin} />
        </Route>
    </Router>
    ), document.getElementById('main')
);