var Input = ReactBootstrap.Input;
var ButtonInput = ReactBootstrap.ButtonInput;
var Alert = ReactBootstrap.Alert;

var AlertBox = React.createClass({
    getInitialState: function() {
        return {
            alertVisible: false
        };
    },

    handleAlertDismiss: function() {
        this.setState({alertVisible: false});
    },

    componentWillReceiveProps: function() {
        this.setState({alertVisible: true});
    },

    render: function() {
        if (this.state.alertVisible) {
            return (
                <Alert bsStyle={this.props.style} onDismiss={this.handleAlertDismiss} dismissAfter={10000}>
                    <p>{this.props.text}</p>
                </Alert>
            );
        }
        else {
            return <div id="alert-ph"></div>;
        }
    }
});

var ServiceAddForm = React.createClass({

    addAlertBox: function() {
        if (this.state.status) {
            var text = this.state.text;
            var bsStyle = this.state.status;
            return (
                <AlertBox text={text} style={bsStyle} />
            );
        }
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var name = React.findDOMNode(this.refs.name.refs.input).value.trim();
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: {name: name},
            success: function() {
                this.setState({
                    style: "success",
                    text: "New service added!"
                });
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    style: "danger",
                    text: "Error! Check console log..."
                });
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {
            style: '',
            text: ''
        };
    },

    render: function() {
        return (
            <form className="service-add-form" onSubmit={this.handleSubmit}>
                /* TODO: reset these state values somehow after X time? */
                <AlertBox style={this.state.style} text={this.state.text} />
                <Input type="text" label="Service Name" ref="name" />
                <ButtonInput type="submit" value="Add Service" />
            </form>
        );
    }
});

var Admin = React.createClass({
    render: function() {
        return (
            <div id="admin">
                <h1>Services</h1>
                <h2>Add Service</h2>
                <ServiceAddForm url="/api/service" />
            </div>
        );
    }
});

module.exports = Admin;