import React from 'react';
import AppActions from './actions/app.action';
import AppStore from './stores/app.store';

import AddForm from './components/addForm.component';

function getAppState() {
  return {
    contacts: AppStore.getContacts()
  }
}

export default class ContactListMainComponent extends React.Component {
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
    console.log(this.state.contacts);
    return (
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="box">
            <AddForm />
          </div>
        </div>
      </div>
    )
  }

  // update view state when change is recived
  _onChange = () => {
    this.setState(getAppState());
  }
}
