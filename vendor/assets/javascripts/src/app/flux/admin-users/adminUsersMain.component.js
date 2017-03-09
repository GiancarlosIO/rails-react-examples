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
    users: AppStore.getUsers(),
    roles: AppStore.getRoles()
  }
}// === end of function to get the state === //

export default class AdminUsersMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    // === Get the users list === //
    console.log('Getting users and roles');
    ADMIN_USERS.getUsers().request.then(
      response => {
        AppActions.receiveUsers(response.data.users, response.data.roles);
      },
      error => { console.log('Error to get the users list', error); }
    ).catch( error => console.log('Error server', error) );
    // === end of Get the users list === //
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let {users, roles} = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
          <AddForm />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-10">
          <UsersList users={users} roles={roles}/>
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState);
  }
}
