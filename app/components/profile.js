/**
 * Created by dhiraj.kumar on 14/12/2016.
 */
var React = require('react');
var Router = require('react-router');
var Repos = require('./github/repos');
var UserProfile = require('./github/userProfile');
var Notes = require('./notes/notes');

var profile = React.createClass({
    getInitialState: function(){
        return {
            notes:[],
            bio:{
                name:'jake bio name  '
            },
            repos:[],
        }
    },
    render: function(){
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio}/>

                </div>
                <div className="col-md-4">

                    <Repos repos="{this.state.repos}"/>
                </div>
                <div className="col-md-4">

                    <Notes notes="{this.state.notes}"/>
                </div>
            </div>

        )
    }
})

module.exports = profile;