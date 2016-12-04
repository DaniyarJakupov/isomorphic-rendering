'use strict';

const React = require('react');

const TeamMember = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <a href={`mailto:${this.props.email}`} style={{
          color: '#ff0099',
          textDecoration: 'none'
        }}>{this.props.email}</a>
      </li>
    );
  }
});

module.exports = TeamMember;
