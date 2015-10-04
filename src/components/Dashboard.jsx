var ServicesTable = require('./ServicesTable.jsx');

var Dashboard = React.createClass({
    render: function() {
        return (
            <div id="dashboard">
                <h1>Dashboard</h1>
                <ServicesTable url="/api/service" pollInterval={60000} />
            </div>
        );
    }
});

module.exports = Dashboard;