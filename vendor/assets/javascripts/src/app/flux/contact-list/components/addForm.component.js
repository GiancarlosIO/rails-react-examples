import React from 'react';

import AppActions from '../actions/app.action';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let name = this.inputName.value.trim(),
        phone_number = this.inputPhone.value.trim(),
        email = this.inputEmail.value.trim();
    if ( name.length > 0 && phone_number.length > 0 && email.length > 0 ) {
      let contact = {
        name,
        phone_number,
        email
      }
      AppActions.saveContact(contact);
      this.inputName.value = '';
      this.inputPhone.value = '';
      this.inputEmail.value = '';
    }
  }

  render() {
    return (
      <div className="row center-xs">
        <h3 style={{width: "100%"}}>Add contact</h3>
        <form className="col-xs-12 form" onSubmit={this.onSubmit}>
          <div className="box">
            <label> Name </label>
            <input className="form__input" type="text" ref={(input) => this.inputName = input} placeholder="Add name..."/>
          </div>
          <div className="box">
            <label>Phone Number</label>
            <input className="form__input" type="text" ref={(input) => this.inputPhone = input} placeholder="Add phone..."/>
          </div>
          <div className="box">
            <label>E-mail</label>
            <input className="form__input" type="text" ref={(input) => this.inputEmail = input} placeholder="Add email..."/>
          </div>
          <div className="box">
            <button type="submit" className="button button--medium button--blue">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
