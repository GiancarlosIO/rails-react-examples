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
  },
  editContact: (contact) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EDIT_CONTACT,
      contact: contact
    });
  },
  updateContact: (id, contact) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_CONTACT,
      contact_id:id,
      contact: contact
    });
  },
  cancelUpdateContact: () => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CANCEL_UPDATE_CONTACT
    })
  }
}

export default AppActions;
