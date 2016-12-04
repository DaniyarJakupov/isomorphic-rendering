'use strict';

const React = require('react');

const { Link } = require('react-router');

const Menu = React.createClass({
  render () {
    return (
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
    );
  }
});

module.exports = Menu;
