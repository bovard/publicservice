var Table = ReactBootstrap.Table;
var Glyphicon = ReactBootstrap.Glyphicon;

var ServicesTableRows = React.createClass({
    render: function() {
        var tableRows = this.props.services.map(function (service) {
            return (
                <tr>
                    <td><Glyphicon glyph="ok-sign" className="green"/> {service.name}</td>
                    <td className="green-background"></td>
                    <td className="green-background"></td>
                    <td className="green-background"></td>
                    <td className="green-background"></td>
                    <td className="green-background"></td>
                    <td className="green-background"></td>
                    <td className="green-background"></td>
                </tr>
            );
        });

        return (
            <tbody>
                {tableRows}
            </tbody>
        );
    }
});

var ServicesTable = React.createClass({
    getServices: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: true,
            success: function(data) {
                this.setState({services: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {services: []};
    },

    componentDidMount: function() {
        this.getServices();
        setInterval(this.getServices, this.props.pollInterval);
    },

    render: function() {
        var headers = ["Service"];
        var d = Moment();

        for (var i = 0; i < 7; i++) {
            headers.push(d.format("M/D/YY"));
            d.subtract(1, "days");
        }

        return (
            <Table bordered condensed hover>
                <thead>
                    <tr>
                        {headers.map(function(text){
                            return <th>{text}</th>
                        })}
                    </tr>
                </thead>
                <ServicesTableRows services={this.state.services} />
            </Table>
        );
    }
});

var Dashboard = React.createClass({
    render: function() {
        return (
            <div id="dashboard">
                <h1>Dashboard</h1>
                <ServicesTable url="/api/services" pollInterval={60000} />
            </div>
        );
    }
});

module.exports = Dashboard;