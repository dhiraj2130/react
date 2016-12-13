/**
 * Created by dhiraj.kumar on 14/12/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function(){
        return (
            <div> Hello world </div>

        )
    }
});
ReactDOM.render(<Main />,document.getElementById('app'));
