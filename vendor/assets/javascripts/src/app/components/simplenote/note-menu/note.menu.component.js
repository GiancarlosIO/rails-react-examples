import React from 'react';

import NoteAddComponent from './note.add.component';
import NoteSearchComponent from './note.search.component';

export default class NoteMenuComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column--4 row padding--rl-10 position-fixed note__column-left">
        <NoteSearchComponent />
        <NoteAddComponent />
      </div>
    )
  }
}
