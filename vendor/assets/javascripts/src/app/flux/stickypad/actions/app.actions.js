import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';

const AppActions = {
  receiveNotes: (notes) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_NOTES,
      notes: notes
    });
  },
  addNote: (note) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note: note
    });
  },
  removeNote: (note_id) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_NOTE,
      note_id
    });
  }
}

export default AppActions
