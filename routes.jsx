'use strict';

const React = require('react');

const { Route, IndexRedirect } = require('react-router');

const About = require('./About'),
      Team = require('./Team');

const routes = (
  <Route path="/">
    <IndexRedirect to="/about" />
    <Route path="about" component={About} />
    <Route path="team" component={Team} />
  </Route>
);

module.exports = routes;
