var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

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

var routes = (
    <Route name="app" path="/" handler={StatDash}>
        <Route name="dashboard" handler={StatDash}/>
        <Route name="incidents" handler={Incidents}/>
        <Route name="admin" handler={Admin}/>
        <DefaultRoute handler={StatDash}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('main'));
});