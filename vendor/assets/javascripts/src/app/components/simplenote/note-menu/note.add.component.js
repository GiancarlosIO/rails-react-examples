import React from 'react';

export default class NoteAddComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--2 flex-center ">
        <div className="icon__container">
          <i className="fa fa-plus"></i>
        </div>
      </div>
    )
  }
}
