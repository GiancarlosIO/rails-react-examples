import React from 'react';
import AppActions from '../actions/app.actions';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEdit = () => {
    AppActions.editUser(this.props.user);
  }

  handleDelete = () => {
    let user_id = this.props.user.id;
    AppActions.deleteUser(user_id);
  }

  render() {
    let {user} = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.role.name}</td>
        <td><button onClick={this.handleEdit} className="button button--min button--emerald">Edit</button></td>
        <td><button onClick={this.handleDelete} className="button button--min button--emerald">Delete</button></td>
      </tr>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
}
