'use strict';

const React = require('react');

const Menu = require('./Menu');

const About = React.createClass({
  render () {
    return (
      <div>
        <Menu />
        <h1>About</h1>
        <p>Welcome to the React sample application.</p>
      </div>
    );
  }
});

module.exports = About;
