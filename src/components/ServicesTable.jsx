var Table = ReactBootstrap.Table;
var Glyphicon = ReactBootstrap.Glyphicon;

var ServicesTableRowWrapper = React.createClass({
    render: function() {
        return (
            <tr>
                <td><Glyphicon glyph="ok-sign" className="green"/> {this.props.service.name}</td>
                <td className="green-background"></td>
                <td className="green-background"></td>
                <td className="green-background"></td>
                <td className="green-background"></td>
                <td className="green-background"></td>
                <td className="green-background"></td>
                <td className="green-background"></td>
            </tr>
        );
    }
});

var ServicesTableHeaderWrapper = React.createClass({
    render: function() {
        return <th>{this.props.header}</th>;
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
        var headers = [{key: -1, value: "Service"}];
        var d = Moment();

        for (var i = 0; i < 7; i++) {
            headers.push({key: i, value: d.format("M/D/YY")});
            d.subtract(1, "days");
        }

        return (
            <Table bordered condensed hover>
                <thead>
                    <tr>
                        {headers.map(function(header){
                            return <ServicesTableHeaderWrapper key={header.key} header={header.value} />
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.state.services.map(function (service) {
                        return <ServicesTableRowWrapper key={service.rowid} service={service}/>;
                    })}
                </tbody>
            </Table>
        );
    }
});

module.exports = ServicesTable;
