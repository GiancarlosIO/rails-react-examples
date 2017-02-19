import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
var EventEmitter = require('events').EventEmitter;
import objectAssign from 'object-assign';
import CONTACT_API from '../utils/api/contactList.api';

var CHANGE_EVENT = 'change';

var _items = [];

var AppStore = objectAssign({}, EventEmitter.prototype, {
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

  }
  return true;
});

export default AppStore;
