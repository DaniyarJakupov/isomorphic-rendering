'use strict';

const React = require('react'),
      ReactDOM = require('react-dom');

const Menu = require('./Menu'),
      TeamMember = require('./TeamMember'),
      TeamMemberAdd = require('./TeamMemberAdd'),
      teamMembers = require('./teamMembers');

const App = React.createClass({
  getInitialState () {
    return {
      teamMembers
    };
  },

  handleAddTeamMember (teamMember) {
    this.setState({
      teamMembers: this.state.teamMembers.push(teamMember)
    });
  },

  render () {
    return (
      <div>
        <Menu />
        <h1>Team</h1>
        <TeamMemberAdd onAdd={this.handleAddTeamMember} />
        <ul>
          {this.state.teamMembers.map(tm =>
            <TeamMember key={tm.name} name={tm.name} email={tm.email} />)}
        </ul>
      </div>
    );
  }
});

module.exports = App;
