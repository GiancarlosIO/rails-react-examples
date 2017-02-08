import React from 'react';

export default class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note__list__item">
        {this.props.text}
      </div>
    )
  }
}
