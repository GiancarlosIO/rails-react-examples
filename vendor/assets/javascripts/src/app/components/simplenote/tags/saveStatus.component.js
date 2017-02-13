import React from 'react';

export default class SaveStatusComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {saveStatus} = this.props;
    return (
      <div className="column--2 text-center text-grey">
        <span>{saveStatus}</span>
      </div>
    )
  }
}
