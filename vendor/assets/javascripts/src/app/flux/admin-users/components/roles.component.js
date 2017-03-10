import React from 'react';

export default class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role_id: this.props.userId ? this.props.userId : 1
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
      <select onChange={this.handleChange} value={this.state.role_id}>
        {rolesOptions}
      </select>
    )
  }
}
