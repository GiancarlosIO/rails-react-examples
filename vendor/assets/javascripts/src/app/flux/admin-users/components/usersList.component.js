import React from 'react';

import User from './user.component';

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {users} = this.props;
    let usersList = users.map( user => {
      return (
        <User key={user.id} user={user}/>
      )
    });
    return (
      <div>
        <table className="full-width admin-users__table">
          <thead>
            <tr>
              <th> Id </th>
              <th> First name </th>
              <th> Last name </th>
              <th> Email </th>
              <th> Age </th>
              <th> Role </th>
              <th colSpan="2"> Actions </th>
            </tr>
          </thead>
          <tbody>
            {usersList}
          </tbody>
        </table>
      </div>
    )
  }
}

UsersList.proptypes = {
  users: React.PropTypes.array.isRequired
}
