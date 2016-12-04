'use strict';

const React = require('react');

const TeamMemberAdd = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      fields: {
        name: '',
        email: ''
      },
      isFormValid: false
    };
  },

  handleChange (event) {
    const fields = Object.assign({}, this.state.fields, {
      [event.target.name]: event.target.value
    });

    this.setState({
      fields,
      isFormValid: fields.name && fields.email
    });
  },

  handleSubmit (event) {
    event.preventDefault();

    if (!this.state.isFormValid) {
      return;
    }

    this.props.onAdd({
      name: this.state.fields.name,
      email: this.state.fields.email
    });

    this.setState({
      fields: {
        name: '',
        email: ''
      }
    });
  },

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' value={this.state.fields.name} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor='email'>E-Mail:</label>
          <input type='text' name='email' id='email' value={this.state.fields.email} onChange={this.handleChange} />
        </div>
        <div>
          <button disabled={!this.state.isFormValid} type='submit'>Join team</button>
        </div>
      </form>
    );
  }
});

module.exports = TeamMemberAdd;
