import React from 'react';

import MenuComponent from './menu/menu.component';
import NoteTextareaComponent from './note/note.textarea.component';
import NoteMenuComponent from './note-menu/note.menu.component';
import NoteListComponent from './note/note.list.component';
import InputTagComponent from './tags/inputTag.component';
import SelectTagComponent from './tags/selectTag.component';

export default class NoteMainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <NoteMenuComponent />
          <MenuComponent />
        </div>
        <div className="row">
          <SelectTagComponent />
          <InputTagComponent />
        </div>
        <div className="row">
          <NoteListComponent />
          <NoteTextareaComponent />
        </div>
      </div>
    )
  }
}
