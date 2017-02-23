import React from 'react';
import AppActions from '../actions/app.actions';

import Note from './note.component';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {notes} = this.props;
    let notesList = notes.map((note, index) => {
      return (
        <Note key={index} note={note} />
      )
    });
    return (
      <div className="sticky-pad__container">
        {notesList}
      </div>
    )
  }
}

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
}
