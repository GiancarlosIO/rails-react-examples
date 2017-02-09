import React from 'react';

import NoteComponent from './note.component';

export default class NoteListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let {notesList} = this.props;
    let notes = notesList.map((note)=> {
      return (<NoteComponent key={note.id} text={note.text} {...note} />);
    })
    return (
      <div className="column--4 padding--rl-10 position-fixed note__list note__column-left">
        {notes}
      </div>
    )
  }
}
