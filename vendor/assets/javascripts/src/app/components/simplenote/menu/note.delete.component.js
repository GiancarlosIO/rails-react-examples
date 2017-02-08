import React from 'react';

export default class NoteDeleteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--1 flex-center">
        <div className="icon__container">
          <i className="fa fa-trash-o"></i>
        </div>
      </div>
    )
  }
}
