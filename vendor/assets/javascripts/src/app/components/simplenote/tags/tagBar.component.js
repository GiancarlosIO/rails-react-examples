import React from 'react';

import InputTagComponent from './inputTag.component';
import SaveStatusComponent from './saveStatus.component';

export default class TagBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {saveStatus} = this.props;
    return (
      <div className="column--6 row note__column-right note__tag">
        <InputTagComponent />
        <SaveStatusComponent saveStatus={saveStatus}/>
      </div>
    )
  }
}
