var App = React.createClass({
    render: function() {
        return (
            <div id="app">
                <Header />
                <div className="table-responsive container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;