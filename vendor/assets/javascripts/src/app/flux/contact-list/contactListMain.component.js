import React from 'react';
import AppActions from './actions/app.action';
import AppStore from './stores/app.store';
import CONTACT_API from './utils/api/contactList.api';

import AddForm from './components/addForm.component';
import ContactList from './components/contactList.component';

// ===== Get the contacts list ======
CONTACT_API.getContactList().request.then(
  (response) => {
    AppActions.receiveContacts(response.data.contacts);
  },
  (error) => { console.log(error) }
).catch( error => console.log(error) )
// ===== End Get the contacts list ======


function getAppState() {
  return {
    contacts: AppStore.getContacts()
  }
}

export default class ContactListMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    console.log(this.state.contacts);
    let {contacts} = this.state;
    return (
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="box">
            <AddForm />
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
