import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';
import ADMIN_USERS from '../utils/api/adminUsers.api';

const CHANGE_EVENT = 'change';

var _users = [];
var _usersFiltered = [];
var _roles = [];
var _userToEdit = {};
var _searchByFirstName = '';

var AppStore = objectAssign({}, EventEmitter.prototype, {
  // === getters === //
  getUsers: function() {
    if (_searchByFirstName.length > 0) {
      return _usersFiltered
    } else {
      return _users;
    }
  },
  getRoles: function() {
    return _roles;
  },
  getUserToEdit: function() {
    return _userToEdit;
  }, // === end of getters === //
  // === setters === //
  setUsers: function(users) {
    _users = users;
  },
  setRoles: function(roles) {
    _roles = roles;
  },
  setUserToEdit: function(user) {
    _userToEdit = user;
  }, // === end of setters === //
  SearchByFirstNameText: function(text) {
    _searchByFirstName = text.trim().toLowerCase();
    if (text.length > 0) {
      _usersFiltered = _users.filter( user => user.first_name.toLowerCase().indexOf(_searchByFirstName) > -1 );
    }
  },
  addUser: function(user) {
    _users = [user].concat(_users);
  },
  updateUser: function(user) {
    let index = _users.findIndex( u => u.id == user.id );
    _users[index] = user;
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
      // save in store
      AppStore.setUserToEdit(action.user);
      // Emit a change
      AppStore.emitChange();
      break;
    case AppConstants.UPDATE_USER:
      // Save in db
      console.log('updating user');
      ADMIN_USERS.updateUser(action.user).request.then(
        response => {
        console.log('user updated successfully');
        // Save in store
        AppStore.updateUser(response.data);
        // Emit a change
        AppStore.emitChange();
        }).catch( error => console.log('error to update a user', error.response));
      break;
    case AppConstants.CANCEL_UPDATE:
      // delete userToEdit in store
      AppStore.setUserToEdit({});
      // Emit a Change
      AppStore.emitChange();
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
    case AppConstants.SEARCH_BY_FIRST_NAME:
      // save in store
      AppStore.SearchByFirstNameText(action.text);
      // Emit a change
      AppStore.emitChange();
      break;
  }
});

export default AppStore;
