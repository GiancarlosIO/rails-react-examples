import React from 'react';

export default class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    let note = this.props.note;
    this.props.handleClick(note);
  }

  render() {
    let {selected, note} = this.props;
    let classNote = selected ? 'selected' : '';
    return (
      <div className={`note__list__item ${classNote}`} onClick={this.onClick}>
        {note.text}
      </div>
    )
  }
}
