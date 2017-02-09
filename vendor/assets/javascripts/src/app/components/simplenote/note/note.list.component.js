import React from 'react';

import NoteComponent from './note.component';

export default class NoteListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickNote = (note) => {
    this.props.selectNote(note);
  }

  render() {
    let {notesList, noteSelected} = this.props;
    let notes = notesList.map((note)=> {
      let selected = noteSelected === note;
      return (<NoteComponent key={note.id} note={note} selected={selected} handleClick={this.handleClickNote}/>);
    })
    return (
      <div className="column--4 padding--rl-10 position-fixed note__list note__column-left">
        {notes}
      </div>
    )
  }
}
