/**
 * Created by dhiraj.kumar on 14/12/2016.
 */
var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username : React.PropTypes.string.isRequired,
        bio : React.PropTypes.object.isRequired,
    },
    render: function(){
        return(
            <div>
                <p>user name :{this.props.username } </p>
                <p>BIO :{this.props.bio.name } </p>
            </div>
        )
    }
});

module.exports = UserProfile;