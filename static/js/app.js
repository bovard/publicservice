"use strict";

var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

var Header = React.createClass({
    displayName: "Header",

    render: function render() {
        return React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                Navbar,
                { brand: "Stat‒", inverse: true, toggleNavKey: 0 },
                React.createElement(
                    Nav,
                    { right: true, eventKey: 0 },
                    React.createElement(
                        NavItem,
                        { eventKey: 1, href: "#/dashboard" },
                        "Dashboard"
                    ),
                    React.createElement(
                        NavItem,
                        { eventKey: 2, href: "#/incidents" },
                        "Incidents"
                    ),
                    React.createElement(
                        NavItem,
                        { eventKey: 3, href: "#/admin" },
                        "Admin"
                    )
                )
            )
        );
    }
});

var StatDash = React.createClass({
    displayName: "StatDash",

    render: function render() {
        return React.createElement(Header, null);
    }
});

var Admin = React.createClass({
    displayName: "Admin",

    render: function render() {
        return React.createElement(Header, null);
    }
});

var Incidents = React.createClass({
    displayName: "Incidents",

    render: function render() {
        return React.createElement(Header, null);
    }
});

var routes = React.createElement(
    Route,
    { name: "app", path: "/", handler: StatDash },
    React.createElement(Route, { name: "dashboard", handler: StatDash }),
    React.createElement(Route, { name: "incidents", handler: Incidents }),
    React.createElement(Route, { name: "admin", handler: Admin }),
    React.createElement(DefaultRoute, { handler: StatDash })
);

Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler, null), document.getElementById('main'));
});