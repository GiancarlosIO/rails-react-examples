import React from 'react';
import emailValidator from 'email-validator';
import AppActions from '../actions/app.actions';

import Roles from './roles.component';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailText: '',
      errorEmail: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.inputFirstName.value.length > 0 && this.inputLastName.value.length > 0 && this.inputEmail.value.length > 0) {
      if (emailValidator.validate(this.inputEmail.value)) {
        let newUser = {
          first_name: this.inputFirstName.value,
          last_name: this.inputLastName.value,
          email: this.inputEmail.value,
          age: this.inputAge.value > 0 ? this.inputAge.value : undefined,
          role_id: this.inputRole.getRoleId()
        };
        console.log('newuser', newUser);
        AppActions.addUser(newUser);
        this.inputFirstName.value = '';
        this.inputLastName.value = '';
        this.setState({emailText: ''});
        this.inputAge.value = '';
        this.inputRole.setRoleId();
      }
    };
  }

  handleChangeEmail = () => {
    this.setState({
      emailText: this.inputEmail.value
    }, () => {
      if (emailValidator.validate(this.state.emailText)) {
        this.setState({ errorEmail: '' });
      } else {
        this.setState({ errorEmail: 'Email not valid' });
      };
    })
  }

  render() {
    let {roles} = this.props;
    return (
      <div className="admin-users__form">
        <h5>Add a new user</h5>
        <form onSubmit={this.handleSubmit}>
          <label className="admin-users__form__group">
            First name
            <input ref={(el) => { this.inputFirstName = el }} type="text"/>
          </label>
          <label className="admin-users__form__group">
            Last name
            <input ref={(el) => { this.inputLastName = el }} type="text"/>
          </label>
          <label className="admin-users__form__group">
            Email <span className="error">{this.state.errorEmail}</span>
            <input value={this.state.emailText} onChange={this.handleChangeEmail} ref={(el) => { this.inputEmail = el }} type="text"/>
          </label>
          <label className="admin-users__form__group">
            Age
            <input ref={(el) => { this.inputAge = el }} type="number" min="1" max="70"/>
          </label>
          <label className="admin-users__form__group">
            Role
            <Roles roles={roles} ref={(el) => { this.inputRole = el; }}/>
          </label>
          <button  className="button button--min button--green-light" type="submit">Create User</button>
        </form>
      </div>
    )
  }
}
