/**
 * Created by dhiraj.kumar on 14/12/2016.
 */
var React = require('react');

var Repos = React.createClass({
    propTypes:{
        username : React.PropTypes.string.isRequired,
        repos:React.PropTypes.array.isRequired,


    },
    render: function() {
        return (
            <div>
                <p>REPOSS</p>
                <p> {this.props.repos}</p>
            </div>
        )
    }
});

module.exports = Repos;