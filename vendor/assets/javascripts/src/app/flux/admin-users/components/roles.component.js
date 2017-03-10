import React from 'react';

import AppActions from '../actions/app.actions';

export default class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role_id: this.props.value ? this.props.value : 1
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId == undefined) {
      this.setState({role_id: nextProps.userId});
    }
  }

  getRoleId = () => {
    return this.state.role_id;
  }

  setRoleId = (id) => {
    if (id) {
      this.setState({role_id: id})
    } else {
      this.setState({role_id: 1})
    }
  }

  handleChange = (e) => {
    this.setState({ role_id: e.target.value }, () => {
      if (this.props.search) {
        AppActions.searchByRole(this.state.role_id)
      };
    });
  }

  render() {
    let {roles} = this.props;
    let extraOption = this.props.search ? (<option value="extra">-----</option>) : '';
    let rolesOptions = roles.map( role => {
      return (
        <option key={role.id} value={role.id}> {role.name} </option>
      )
    })
    return (
      <select
        className="admin-users__roles"
        onChange={this.handleChange}
        value={this.state.role_id}>
        { extraOption }
        {rolesOptions}
      </select>
    )
  }
}
