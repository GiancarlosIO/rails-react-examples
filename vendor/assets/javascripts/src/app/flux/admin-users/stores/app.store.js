import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';
import ADMIN_USERS from '../utils/api/adminUsers.api';

const CHANGE_EVENT = 'change';

var _users = [];
var _roles = []

var AppStore = objectAssign({}, EventEmitter.prototype, {
  // === getters === //
  getUsers: function() {
    return _users;
  },
  getRoles: function() {
    return _roles;
  }, // === end of getters === //
  // === setters === //
  setUsers: function(users) {
    _users = users;
  },
  setRoles: function(roles) {
    _roles = roles;
  }, // === end of setters === //
  addUser: function(user) {
    _users = [user].concat(_users);
  },
  updateUser: function(user) {

  },
  deleteUser: function(user_id) {
    let index = _users.findIndex( user => user.id == user_id );
    _users.splice(index, 1);
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
      console.log('Saving Users and Roles in store');
      // set users in store
      AppStore.setUsers(action.users);
      AppStore.setRoles(action.roles);
      // Emit a change
      AppStore.emitChange();
      break;
    case AppConstants.ADD_USER:
      let user = action.user;
      // save to db
      console.log('saving user to db');
      ADMIN_USERS.createUser(user).request.then(
        response => {
          // save to Store
          console.log('Saving user to store');
          AppStore.addUser(response.data);
          // Emit a change
          AppStore.emitChange();
        }
      ).catch( error => console.log('error to create user', error.response) );
      break;
    case AppConstants.EDIT_USER:
      break;
    case AppConstants.UPDATE_USER:
      break;
    case AppConstants.DELETE_USER:
      let user_id = action.user_id
      // delete in db
      ADMIN_USERS.deleteUser(user_id).request.then(
        response => {
          console.log('Delete successfully', response.data.message);
          // delete in store
          AppStore.deleteUser(user_id)
          // emit a change
          AppStore.emitChange();
        }).catch( error => console.log('error to delete user', error.response) )
      break;
  }
});

export default AppStore;
