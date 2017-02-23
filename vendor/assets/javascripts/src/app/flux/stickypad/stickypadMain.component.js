import React from 'react';
import AppActions from './actions/app.actions';
import AppStore from './stores/app.store';


// === function callback to get the state ==== //
function getAppState() {
  return {

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
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-5">
          <h1>Stickypad component</h1>
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState)
  }
}
