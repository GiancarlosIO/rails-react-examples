import React from 'react';
import AppActions from './actions/app.actions';
import AppStore from './stores/app.store';
import ApiNotes from './utils/api/api.notes';

import AddNoteForm from './components/addNoteForm.component';

// === function callback to get the state ==== //
function getAppState() {
  return {
    notes: AppStore.getNotes()
  }
}// === function callback to get the state ==== //

export default class StickyPadMainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._change);
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-xs-12  col-sm-3  col-md-2 col-lg-2">
          <AddNoteForm />
        </div>
        <div className="col-xs-12 col-sm-9 col-md-10 col-lg-10">
          <div className="box">
            Note List
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState)
  }
}
