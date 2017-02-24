import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';
import ApiNotes from '../utils/api/api.notes';
import {EventEmitter} from 'events';
import objectAssign from 'object-assign';

const CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = objectAssign({}, EventEmitter.prototype, {
  setNotes: function(notes) {
    _notes = notes;
  },
  addNote: function(note) {
    _notes = [note].concat(_notes);
  },

  getNotes: function() {
    return _notes;
  },
  removeNote: function(note_id) {
    let index = _notes.findIndex( x => x.id === note_id );
    _notes.splice(index, 1);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
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
      ApiNotes.addNote(action.note).request.then(
        (response) => {
          console.log('Added successfully to db');
        },
        (error) => { console.log(error) }
      ).catch( error => console.log(error) );

      // Emit a change
      AppStore.emitChange();
      break;
    case AppConstants.RECEIVE_NOTES:
      console.log('Receiving Notes');
      // Save to Store
      AppStore.setNotes(action.notes);

      // Emit a change
      AppStore.emitChange();
      break;
    case AppConstants.REMOVE_NOTE:
      console.log('Removing notes');
      // Delete in store
      AppStore.removeNote(action.note_id);
      // Delete in API
      ApiNotes.removeNote(action.note_id).request.then(
        (response) => {
          console.log(response.data.message);
        },
        (error) => { console.log('error, to delete', error); }
      ).catch( error => console.log('error server', error) )
      // Emit a change
      AppStore.emitChange();
      break;
  };
  return true;
});

export default AppStore;
