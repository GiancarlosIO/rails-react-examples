import React from 'react';
import AppActions from './actions/app.actions';
import AppStore from './stores/app.store';
import ADMIN_USERS from './utils/api/adminUsers.api';

// === Import Component ===//
import AddForm from './components/addForm.component';
import EditForm from './components/editForm.component';
import UsersList from './components/usersList.component';
// === end of Import Component ===//


// === function to get the state === //
function getAppState() {
  return {
    users: AppStore.getUsers(),
    roles: AppStore.getRoles(),
    userToEdit: AppStore.getUserToEdit()
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
    let {users, roles, userToEdit} = this.state;
    let form = userToEdit.id == undefined ? (<AddForm roles={roles} />) : (<EditForm user={userToEdit} roles={roles} />);
    return (
      <div>
        <div className="row">
          <div className="col-xs-12"> <h4 className="text-center">Managment Users</h4> </div>
        </div>
        <div className="row">
          <div className="col-xs-12"><h4 className=""> Search box</h4></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-2 height--fixed flex--column--start">
            {form}
          </div>
          <div className="col-xs-12 col-sm-9 col-md-9 col-lg-10 height--fixed flex--column--start">
            <UsersList users={users}/>
          </div>
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState);
  }
}
