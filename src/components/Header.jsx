var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <Navbar brand="Public Service" inverse toggleNavKey={0}>
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

module.exports = Header;