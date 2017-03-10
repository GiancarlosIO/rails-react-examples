import React from 'react';
import AppActions from '../actions/app.actions';

import Roles from './roles.component';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onChange = (e) => {
    let input = e.target.value;
    this.setState({input});
    AppActions.searchByFirstName(input);
  }

  render() {
    let {roles} = this.props;
    return (
      <div className="row admin-users__search">
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-2 flex flex-center">
          <Roles roles={roles} search value={"extra"}/>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-10 flex flex-center">
          <input onChange={this.onChange} value={this.state.input} type="text" placeholder="Search by FirstName"/>
        </div>
      </div>
    )
  }
}
