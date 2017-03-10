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
  updateUser: (user) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_USER,
      user
    });
  },
  cancelUpdate: () => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CANCEL_UPDATE
    });
  },
  deleteUser: (user_id) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_USER,
      user_id
    });
  },
  searchByFirstName: (text) => {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_BY_FIRST_NAME,
      text
    })
  }
}

export default AppActions;
