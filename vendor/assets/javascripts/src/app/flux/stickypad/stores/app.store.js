import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';

const CHANGE_EVENT = 'change';

var AppStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register((payload) => {
  let action = payload.action;
  switch (action.actionType) {
    case '':
      break;
  };
  return true;
});

export default AppStore;
