import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';

const AppActions = {
  receiveUsers: (users, roles) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_USERS,
      users,
      roles
    });
  },
  addUser: (user) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_USER,
      user
    });
  },
  editUser: (user) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EDIT_USER,
      user
    });
  },
  updateUser: (user_id, user) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_USER,
      user_id,
      user
    });
  },
  deleteUser: (user_id) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_USER,
      user_id
    });
  }
}

export default AppActions;
