var App = React.createClass({
    render: function() {
        return (
            <div id="app">
                <Header />
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;