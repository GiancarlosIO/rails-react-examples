import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEdit = () => {

  }

  handleDelete = () => {

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