import React from 'react';

import InputTagComponent from './inputTag.component';
import SaveStatusComponent from './saveStatus.component';

export default class TagBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = (value) => {
    this.props.handleChangeInputTag(value);
  }

  render() {
    let {saveStatus, noteSelected} = this.props;
    return (
      <div className="column--6 row margin-auto note__column-right note__tag">
        <InputTagComponent noteSelected={noteSelected} handleOnChange={this.handleOnChange}/>
        <SaveStatusComponent saveStatus={saveStatus}/>
      </div>
    )
  }
}

TagBarComponent.propTypes = {
  handleChangeInputTag: React.PropTypes.func.isRequired,
  saveStatus: React.PropTypes.string.isRequired,
  noteSelected: React.PropTypes.object.isRequired
}
