import React from 'react';
import CONTACT_API from './utils/api/contactList.api';
import AppActions from './actions/app.action';
import AppStore from './stores/app.store';

function getAppState() {
  return {
    
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
    return (
      <div>
        <h1>ContactListMainComponent</h1>
      </div>
    )
  }

  // update view state when change is recived
  _onChange = () => {
    this.setState(getAppState());
  }
}
