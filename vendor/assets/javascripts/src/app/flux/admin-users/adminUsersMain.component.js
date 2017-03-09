import React from 'react';
import AppActions from './actions/app.actions';
import AppStore from './stores/app.store';
import ADMIN_USERS from './utils/api/adminUsers.api';

// === Import Component ===//
import AddForm from './components/addForm.component';
import UsersList from './components/usersList.component';
// === end of Import Component ===//


// === function to get the state === //
function getAppState() {
  return {
    users: AppStore.getUsers()
  }
}// === end of function to get the state === //

export default class AdminUsersMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <AddForm />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-10">
          <UsersList />
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState);
  }
}
