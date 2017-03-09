import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';
import ADMIN_USERS from '../utils/api/adminUsers.api';

const CHANGE_EVENT = 'change';

var _users = [];

var AppStore = objectAssign({}, EventEmitter.prototype, {
  // === getters === //
  getUsers: function() {
    return _users;
  }, // === end of getters === //
  // === setters === //
  setUsers: function(users) {
    _users = users;
  }, // === end of setters === //
  addUser: function(user) {

  },
  updateUser: function(user) {

  },
  deleteUser: function(user_id) {

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

AppDispatcher.register( payload => {
  let action = payload.action;
  switch (action.actionType) {
    case AppConstants.RECEIVE_USERS:
      break;
    case AppConstants.ADD_USER:
      break;
    case AppConstants.EDIT_USER:
      break;
    case AppConstants.UPDATE_USER:
      break;
    case AppConstants.DELETE_USER:
      break;
  }
});

export default AppStore;
