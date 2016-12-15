/**
 * Created by dhiraj.kumar on 14/12/2016.
 */
var React = require('react');
var NotesList = require('./notesList');

var Notes = React.createClass({
    render: function(){
        console.log(this.props.notes);
        return(
            <div>
              <h3> Notes for { this.props.username} </h3>
                <NotesList notes={this.props.notes}/>
           
            </div>
        )
    }
});

module.exports = Notes;