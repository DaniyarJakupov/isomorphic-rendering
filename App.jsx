'use strict';

const ReactDOM = require('react-dom');

const { Router, browserHistory } = require('react-router');

const routes = require('./routes');

const App = React.createClass({
  render () {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
});

module.exports = App;
