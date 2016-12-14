/**
 * Created by dhiraj.kumar on 14/12/2016.
 */
var React = require('react');
var Router = require('react-router');


var profile = React.createClass({
    getInitialState: function(){
        return {
            notes:[],
            bio:{},
            repos:[],
        }
    },
    render: function(){
        return (
            <div className="row">
                <div className="col-md-4">
                    User Profile Component
                 </div>
            </div>
        )
    }
})

module.exports = profile;