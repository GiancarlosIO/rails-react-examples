import React from 'react';
import AppActions from '../actions/app.action';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactToEdit: this.props.contactToEdit
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({contactToEdit: nextProps.contactToEdit});
  }

  handleCancelUpdate = () => {
    AppActions.cancelUpdateContact();
  }

  onSubmit = (e) => {
    e.preventDefault();
    let contactToEdit = this.props.contactToEdit;
    let name = this.inputName.value,
        phone_number = this.inputPhone.value,
        email = this.inputEmail.value;
    if (name.length > 0 && phone_number.length > 0 && email.length > 0) {
      let contact = {
        name,
        phone_number,
        email
      }
      AppActions.updateContact(contactToEdit.id, contact);
    }
  }

  onChange = (name) => {
    switch (name) {
      case 'name':
        if (this.inputName.value.length > 0 ) {
          let newContact = this.state.contactToEdit;
          newContact.name = this.inputName.value.trim();
          this.setState({contactToEdit: newContact})
        }
        break;
      case 'phone':
      if (this.inputPhone.value.length > 0 ) {
        let newContact = this.state.contactToEdit;
        newContact.phone_number = this.inputPhone.value;
        this.setState({contactToEdit: newContact})
      }
        break;
      case 'email':
        if (this.inputEmail.value.length > 0 ) {
          let newContact = this.state.contactToEdit;
          newContact.email = this.inputEmail.value;
          this.setState({contactToEdit: newContact})
        }
        break;
    }
  }

  render() {
    let {contactToEdit} = this.state;
    return (
      <div className="row center-xs">
        <h3 className="full-width">Edit Contact</h3>
        <form className="col-xs-12 form"
          onSubmit={this.onSubmit}>
          <div className="box">
            <label> Name </label>
            <input className="form__input"
              type="text"
              ref={(input) => this.inputName = input }
              onChange={this.onChange.bind(this,'name')}
              value={contactToEdit.name}/>
          </div>
          <div className="box">
            <label> Phone </label>
            <input className="form__input"
              type="text"
              ref={(input) => this.inputPhone = input }
              onChange={this.onChange.bind(this,'phone')}
              value={contactToEdit.phone_number}/>
          </div>
          <div className="box">
            <label> Email </label>
            <input className="form__input"
              type="text"
              ref={(input) => this.inputEmail = input }
              onChange={this.onChange.bind(this,'email')}
              value={contactToEdit.email}/>
          </div>
          <div className="box">
            <button type="submit"
              className="button button--medium button--blue">
              Update contact
            </button>
            <div
              onClick={this.handleCancelUpdate}
              className="margin-left-15 button button--medium button--emerald">
              Cancel
            </div>
          </div>
        </form>
      </div>
    )
  }
}

EditForm.propTypes = {
  contactToEdit: React.PropTypes.object.isRequired
}
