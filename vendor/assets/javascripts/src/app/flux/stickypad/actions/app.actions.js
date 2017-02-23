import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';

const AppActions = {
  addNote: (note) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note: note
    });
  }
}

export default AppActions
