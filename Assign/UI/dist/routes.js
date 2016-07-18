var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var WeatherMain = require('./components/WeatherMain');
var Master = require('./components/Master');
var WrDisplay = require('./components/WrDisplay');
// var HomePage = require('./components/Home');

module.exports = (
  <Route>
      <Route handler={Master}>
          <DefaultRoute handler={WeatherMain} name="WeatherMain"/>
      </Route>
      <Route handler={WrDisplay} name="WrDisplay" path="/WrDisplay"/>
  </Route>
);
