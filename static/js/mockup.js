"use strict";

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var Table = ReactBootstrap.Table;
var Glyphicon = ReactBootstrap.Glyphicon;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;

var Mockup = React.createClass({
    displayName: "Mockup",

    render: function render() {
        return React.createElement(
            "div",
            { className: "dashboard-mockup" },
            React.createElement(
                Navbar,
                { brand: "Stat‒", inverse: true, toggleNavKey: 0 },
                React.createElement(
                    Nav,
                    { right: true, eventKey: 0 },
                    React.createElement(
                        NavItem,
                        { eventKey: 1, href: "#" },
                        "Dashboard"
                    ),
                    React.createElement(
                        NavItem,
                        { eventKey: 2, href: "#" },
                        "Incidents"
                    ),
                    React.createElement(
                        NavItem,
                        { eventKey: 3, href: "#" },
                        "Admin"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "table-responsive container" },
                React.createElement(
                    "h1",
                    null,
                    "Dashboard"
                ),
                React.createElement(
                    Table,
                    { bordered: true, condensed: true, hover: true },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "Service"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/30/15"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/29/15"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/28/15"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/27/15"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/26/15"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/25/15"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "9/24/15"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                React.createElement(Glyphicon, { glyph: "ok-sign", className: "green" }),
                                " Website 1"
                            ),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "orange-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" })
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                React.createElement(Glyphicon, { glyph: "ok-sign", className: "green" }),
                                " Website 2"
                            ),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" })
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                React.createElement(Glyphicon, { glyph: "ok-sign", className: "green" }),
                                " Website 3"
                            ),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "red-background" }),
                            React.createElement("td", { className: "red-background" }),
                            React.createElement("td", { className: "green-background" })
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                React.createElement(Glyphicon, { glyph: "exclamation-sign", className: "orange" }),
                                " API"
                            ),
                            React.createElement("td", { className: "orange-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" })
                        ),
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                React.createElement(Glyphicon, { glyph: "remove-sign", className: "red" }),
                                " External Service"
                            ),
                            React.createElement("td", { className: "red-background" }),
                            React.createElement("td", { className: "red-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" }),
                            React.createElement("td", { className: "green-background" })
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    null,
                    "Recent Incidents"
                ),
                React.createElement(
                    ListGroup,
                    null,
                    React.createElement(
                        ListGroupItem,
                        { header: "Incident #12039" },
                        React.createElement(
                            "strong",
                            null,
                            "Website 1"
                        ),
                        React.createElement("br", null),
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et turpis non purus ultrices porta vitae non nisl. Aenean ullamcorper ante ac vehicula molestie.",
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { className: "small text-muted" },
                            " Wed, 30 Sep 2015 22:27:39 +0000"
                        )
                    ),
                    React.createElement(
                        ListGroupItem,
                        { header: "Incident #12038" },
                        React.createElement(
                            "strong",
                            null,
                            "Website 1"
                        ),
                        React.createElement("br", null),
                        "Maecenas a commodo mi, in tempus magna. Donec euismod nibh eu tempor semper. Mauris quis dictum orci. Proin quis leo odio. Integer non enim quis magna posuere accumsan et sed orci. Pellentesque auctor aliquet mauris, sed hendrerit nunc varius at. In pretium ut mi at semper. Maecenas leo velit, ullamcorper nec fringilla nec, condimentum vel orci. Duis quis viverra tellus, egestas vestibulum risus.",
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { className: "small text-muted" },
                            "Mon, 28 Sep 2015 23:27:39 +0000"
                        )
                    ),
                    React.createElement(
                        ListGroupItem,
                        { header: "Incident #12037" },
                        React.createElement(
                            "strong",
                            null,
                            "API"
                        ),
                        React.createElement("br", null),
                        "Nulla facilisi. In sollicitudin magna urna, eget lacinia urna venenatis vitae. Integer pretium ligula dolor, malesuada luctus erat egestas ac.",
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { className: "small text-muted" },
                            "Sat, 26 Sep 2015 07:27:39 +0000"
                        )
                    ),
                    React.createElement(
                        ListGroupItem,
                        { header: "Incident #12036" },
                        React.createElement(
                            "strong",
                            null,
                            "External Service"
                        ),
                        React.createElement("br", null),
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et turpis non purus ultrices porta vitae non nisl. Aenean ullamcorper ante ac vehicula molestie.",
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { className: "small text-muted" },
                            " Thu, 24 Sep 2015 09:27:39 +0000"
                        )
                    ),
                    React.createElement(
                        ListGroupItem,
                        { header: "Incident #12035" },
                        React.createElement(
                            "strong",
                            null,
                            "Website 3"
                        ),
                        React.createElement("br", null),
                        "Maecenas a commodo mi, in tempus magna. Donec euismod nibh eu tempor semper. Mauris quis dictum orci. Proin quis leo odio. Integer non enim quis magna posuere accumsan et sed orci. Pellentesque auctor aliquet mauris, sed hendrerit nunc varius at. In pretium ut mi at semper. Maecenas leo velit, ullamcorper nec fringilla nec, condimentum vel orci. Duis quis viverra tellus, egestas vestibulum risus.",
                        React.createElement("br", null),
                        React.createElement(
                            "span",
                            { className: "small text-muted" },
                            "Thu, 24 Sep 2015 04:27:39 +0000"
                        )
                    )
                )
            )
        );
    }
});

React.render(React.createElement(Mockup, null), document.getElementById('main'));