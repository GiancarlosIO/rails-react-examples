import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import ApiNotes from '../utils/api/api.notes';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';

const CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = objectAssign({}, EventEmitter.prototype, {
  addNote: function(note) {
    _notes.push(note);
  },

  getNotes: function() {
    return _notes;
  },

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
    case AppConstants.ADD_NOTE:
      console.log('Adding note');
      // Save store
      AppStore.addNote(action.note);

      // Save api
      ApiNotes.addNote(note);
      // Emit a change
      AppStore.emitChange();
      break;
  };
  return true;
});

export default AppStore;
