var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var Table = ReactBootstrap.Table;
var Glyphicon = ReactBootstrap.Glyphicon;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var Mockup = React.createClass({
  render: function() {
    return (
        <div className="dashboard-mockup">
            <Navbar brand="Stat‒" inverse toggleNavKey={0}>
                <Nav right eventKey={0}>
                    <NavItem eventKey={1} href="#">Dashboard</NavItem>
                    <NavItem eventKey={2} href="#">Incidents</NavItem>
                    <NavItem eventKey={3} href="#">Admin</NavItem>
                </Nav>
            </Navbar>
            <div className="table-responsive container">
                <h1>Dashboard</h1>
                <Table bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>9/30/15</th>
                            <th>9/29/15</th>
                            <th>9/28/15</th>
                            <th>9/27/15</th>
                            <th>9/26/15</th>
                            <th>9/25/15</th>
                            <th>9/24/15</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Glyphicon glyph="ok-sign" className="green"/> Website 1</td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="orange-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                        </tr>
                        <tr>
                            <td><Glyphicon glyph="ok-sign" className="green"/> Website 2</td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                        </tr>
                        <tr>
                            <td><Glyphicon glyph="ok-sign" className="green"/> Website 3</td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="red-background"></td>
                            <td className="red-background"></td>
                            <td className="green-background"></td>
                        </tr>
                        <tr>
                            <td><Glyphicon glyph="exclamation-sign" className="orange" /> API</td>
                            <td className="orange-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                        </tr>
                        <tr>
                            <td><Glyphicon glyph="remove-sign" className="red" /> External Service</td>
                            <td className="red-background"></td>
                            <td className="red-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                            <td className="green-background"></td>
                        </tr>
                    </tbody>
                </Table>

                <h1>Recent Incidents</h1>
                <ListGroup>
                    <ListGroupItem header="Incident #12039">
                        <strong>Website 1</strong><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                        turpis non purus ultrices porta vitae non nisl. Aenean ullamcorper ante ac vehicula molestie.
                        <br /><span className="small text-muted"> Wed, 30 Sep 2015 22:27:39 +0000</span>
                    </ListGroupItem>
                    <ListGroupItem header="Incident #12038">
                        <strong>Website 1</strong><br />
                        Maecenas a commodo mi, in tempus magna. Donec euismod nibh eu tempor
                        semper. Mauris quis dictum orci. Proin quis leo odio. Integer non enim quis magna posuere
                        accumsan et sed orci. Pellentesque auctor aliquet mauris, sed hendrerit nunc varius at. In
                        pretium ut mi at semper. Maecenas leo velit, ullamcorper nec fringilla nec, condimentum vel
                        orci. Duis quis viverra tellus, egestas vestibulum risus.
                        <br /><span className="small text-muted">Mon, 28 Sep 2015 23:27:39 +0000</span>
                    </ListGroupItem>
                    <ListGroupItem header="Incident #12037">
                        <strong>API</strong><br />
                        Nulla facilisi. In sollicitudin magna urna, eget lacinia
                        urna venenatis vitae. Integer pretium ligula dolor, malesuada luctus erat egestas ac.
                        <br /><span className="small text-muted">Sat, 26 Sep 2015 07:27:39 +0000</span>
                    </ListGroupItem>
                    <ListGroupItem header="Incident #12036">
                        <strong>External Service</strong><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                        turpis non purus ultrices porta vitae non nisl. Aenean ullamcorper ante ac vehicula molestie.
                        <br /><span className="small text-muted"> Thu, 24 Sep 2015 09:27:39 +0000</span>
                    </ListGroupItem>
                    <ListGroupItem header="Incident #12035">
                        <strong>Website 3</strong><br />
                        Maecenas a commodo mi, in tempus magna. Donec euismod nibh eu tempor
                        semper. Mauris quis dictum orci. Proin quis leo odio. Integer non enim quis magna posuere
                        accumsan et sed orci. Pellentesque auctor aliquet mauris, sed hendrerit nunc varius at. In
                        pretium ut mi at semper. Maecenas leo velit, ullamcorper nec fringilla nec, condimentum vel
                        orci. Duis quis viverra tellus, egestas vestibulum risus.
                        <br /><span className="small text-muted">Thu, 24 Sep 2015 04:27:39 +0000</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
  }
});

React.render(
    <Mockup />,
    document.getElementById('main')
);