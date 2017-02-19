import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';

var AppActions = {
  saveContact: (contact) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SAVE_CONTACT,
      contact: contact
    });
  },
  receiveContacts: (contacts) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_CONTACTS,
      contacts: contacts
    });
  },
  deleteContact: (id) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_CONTACT,
      contact_id: id
    });
  }
}

export default AppActions;
