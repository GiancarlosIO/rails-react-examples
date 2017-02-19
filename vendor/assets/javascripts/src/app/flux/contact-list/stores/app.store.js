import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';
import CONTACT_API from '../utils/api/contactList.api';

var CHANGE_EVENT = 'change';

var _contacts = [];
var _contactToEdit = {};

var AppStore = objectAssign({}, EventEmitter.prototype, {
  getContacts: function() {
    return _contacts;
  },
  getContactToEdit: function() {
    return _contactToEdit;
  },
  saveContact: function(contact) {
    let newContacts = [contact].concat(_contacts);
    _contacts = newContacts;
  },
  setContacts: function(contacts) {
    _contacts = contacts;
  },
  deleteContact: function(contact_id) {
    let index = _contacts.findIndex( x => x.id == contact_id );
    if ( contact_id === _contactToEdit.id ) {
      _contactToEdit = {};
    }
    _contacts.splice(index, 1);
  },
  setContactToEdit: function(contact) {
    _contactToEdit = contact;
  },
  updateContact: function(contact) {
    let index = _contacts.findIndex( x => x.id == contact.id );
    _contacts[index].name = contact.name;
    _contacts[index].phone_number = contact.phone_number;
    _contacts[index].email = contact.email;
  },
  cancelUpdateContact: function() {
    _contactToEdit = {};
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((payload) => {
  let action = payload.action;
  switch (action.actionType) {
    case AppConstants.SAVE_CONTACT:
      console.log('saving contact...');
      // Save in API
      CONTACT_API.createContact(action.contact).request.then(
        (response) => {
          // Store save
          AppStore.saveContact(response.data);
          // Emit a change
          AppStore.emit(CHANGE_EVENT);
        },
        (error) => { console.log(error); }
      ).catch( error => console.log(error) );
      break;
    case AppConstants.RECEIVE_CONTACTS:
      console.log('receiving contacts');
      // Store the contacts
      AppStore.setContacts(action.contacts);
      // Emit a change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.DELETE_CONTACT:
      console.log('removing contact');
      // Delete in API
      CONTACT_API.deleteContact(action.contact_id).request.then(
        (response) => {
          // Delete in Store
          AppStore.deleteContact(action.contact_id);
          // Emit a change
          AppStore.emit(CHANGE_EVENT);
        },
        (error) => { console.log(error) }
      ).catch( error => console.log(error) )
      break;
    case AppConstants.EDIT_CONTACT:
      // Set contact in store
      AppStore.setContactToEdit(action.contact);
      // Emit a change
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.UPDATE_CONTACT:
      // Update in API
      CONTACT_API.updateContact(action.contact_id, action.contact).request.then(
        (response) => {
          // Save in Store
          AppStore.updateContact(response.data)
          // Emit a change
          AppStore.emit(CHANGE_EVENT);
        },
        (error) => { console.log(error); }
      ).catch( error => console.log(error) )
      break;
    case AppConstants.CANCEL_UPDATE_CONTACT:
      // Edit store
      AppStore.cancelUpdateContact();
      // Emit a change
      AppStore.emit(CHANGE_EVENT);
      break;
  }
  return true;
});

export default AppStore;
