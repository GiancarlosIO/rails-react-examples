import React from 'react';

import NoteComponent from './note.component';

export default class NoteListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--4 padding--rl-10 position-fixed note__list note__column-left">
        <NoteComponent text="Note 1" />
        <NoteComponent text="Note 2" />
        <NoteComponent text="Note 3" />
        <NoteComponent text="Note 4" />
        <NoteComponent text="Note 5" />
      </div>
    )
  }
}
