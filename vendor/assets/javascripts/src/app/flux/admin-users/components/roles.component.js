import React from 'react';

export default class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role_id: 1
    }
  }

  getRoleId = () => {
    return this.state.role_id;
  }

  resetRoleId = () => {
    this.setState({role_id: 1})
  }

  handleChange = (e) => {
    this.setState({
      role_id: e.target.value
    });
  }

  render() {
    let {roles} = this.props;
    let rolesOptions = roles.map( role => {
      return (
        <option key={role.id} value={role.id}> {role.name} </option>
      )
    })
    return (
      <select onChange={this.handleChange}>
        {rolesOptions}
      </select>
    )
  }
}
