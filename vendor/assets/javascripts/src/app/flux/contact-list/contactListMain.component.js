import React from 'react';
import AppActions from './actions/app.action';
import AppStore from './stores/app.store';
import CONTACT_API from './utils/api/contactList.api';

import AddForm from './components/addForm.component';
import ContactList from './components/contactList.component';
import EditForm from './components/editForm.component';

function getAppState() {
  return {
    contacts: AppStore.getContacts(),
    contactToEdit: AppStore.getContactToEdit()
  }
}

export default class ContactListMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    // ===== Get the contacts list ======
    CONTACT_API.getContactList().request.then(
      (response) => {
        AppActions.receiveContacts(response.data.contacts);
      },
      (error) => { console.log(error) }
    ).catch( error => console.log(error) )
    // ===== End Get the contacts list ======
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let {contacts, contactToEdit} = this.state;
    let form = contactToEdit.id === undefined ? (<AddForm />) : (<EditForm contactToEdit={contactToEdit}/>)
    return (
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="box">
            {form}
            <ContactList contacts={contacts}/>
          </div>
        </div>
      </div>
    )
  }

  // update view state when change is recived
  _onChange = () => {
    this.setState(getAppState());
  }
}
