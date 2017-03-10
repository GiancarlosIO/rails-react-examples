import React from 'react';
import emailValidator from 'email-validator';

import Roles from './roles.component';
import AppActions from '../actions/app.actions';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      errorEmail: emailValidator.validate(this.props.user.email) ? '' : 'Email not valid'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: nextProps.user}, () => {
      if (emailValidator.validate(this.state.user.email)) {
        this.setState({ errorEmail: '' });
      } else {
        this.setState({ errorEmail: 'Email not valid' });
      };
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {user} = this.state;
    user.role_id = this.inputRole.getRoleId();
    user.role = undefined
    if (user.first_name.length > 0 && user.last_name.length > 0 && this.state.errorEmail == '') {
      AppActions.updateUser(user);
    }
    AppActions.cancelUpdate();
  }

  handleChange = (type) => {
    let newUser = this.state.user;
    switch (type) {
      case 'first_name':
        newUser.first_name = this.inputFirstName.value;
        this.setState({user: newUser});
        break;
      case 'last_name':
        newUser.last_name = this.inputLastName.value;
        this.setState({user: newUser});
        break;
      case 'age':
        newUser.age = this.inputAge.value;
        this.setState({user: newUser});
        break;
      case 'email':
        newUser.email = this.inputEmail.value;
        this.setState({user: newUser}, () => {
          if (emailValidator.validate(this.state.user.email)) {
            this.setState({ errorEmail: '' });
          } else {
            this.setState({ errorEmail: 'Email not valid' });
          };
        });
        break;
    }
  }

  cancelUpdate = () => {
    AppActions.cancelUpdate();
  }

  render() {
    let {user} = this.state;
    let {roles} = this.props;
    return (
      <div className="admin-users__form">
        <h5>Edit a user</h5>
        <form onSubmit={this.handleSubmit}>
          <label className="admin-users__form__group">
            First name
            <input
              value={user.first_name}
              ref={(el) => { this.inputFirstName = el }}
              onChange={this.handleChange.bind(this, 'first_name')}
              type="text"/>
          </label>
          <label className="admin-users__form__group">
            Last name
            <input
              value={user.last_name}
              ref={(el) => { this.inputLastName = el }}
              onChange={this.handleChange.bind(this, 'last_name')}
              type="text"/>
          </label>
          <label className="admin-users__form__group">
            Email <span>{this.state.errorEmail}</span>
          <input
            value={user.email}
            ref={(el) => { this.inputEmail = el }}
            onChange={this.handleChange.bind(this, 'email')}
            type="text"/>
          </label>
          <label className="admin-users__form__group">
            Age
            <input
              value={user.age}
              ref={(el) => { this.inputAge = el }}
              onChange={this.handleChange.bind(this, 'age')}
              type="number"
              min="1"
              max="70"/>
          </label>
          <label className="admin-users__form__group">
            Role
            <Roles
              roles={roles}
              ref={(el) => { this.inputRole = el; }}
              userId={user.id}
              />
          </label>
          <button
            className="button button--min button--blue"
            type="submit">
            Update User
          </button>
          <div
            className="button button--min button--grey"
            onClick={this.cancelUpdate}>
            Cancel
          </div>
        </form>
      </div>
    )
  }
}
