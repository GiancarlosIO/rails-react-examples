import React from 'react';

export default class NoteSearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--8 flex-center">
        <div className="input--icon">
          <input className="input__text" type="text" placeholder="note name..."/>
          <i className="fa fa-search"></i>
        </div>
      </div>
    );
  }
}
