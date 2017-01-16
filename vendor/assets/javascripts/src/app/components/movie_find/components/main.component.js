import React from 'react';
// actions
import AppActions from '../actions/app.action';
// store
import AppStore from '../stores/app.store';

export default class MovieMainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>Movie component</h2>
      </div>
    )
  }
}
