/**
 * Created by dhiraj.kumar on 14/12/2016.
 */

var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
const profile = require('../components/profile');

module.exports = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={profile} />
        <IndexRoute component={Home}/>
    </Route>
)
