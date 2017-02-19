import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import EventEmitter from 'events';
import assign from 'object-assign';
import CONTACT_API from '../utils/api/contactList.api';

var CHANGE_EVENT = 'change';

var _items = [];

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: () => {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: () => {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: () => {
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
