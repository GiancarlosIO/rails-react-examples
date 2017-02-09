import React from 'react';

import NoteAPI from './api/note.api';

import MenuComponent from './menu/menu.component';
import NoteTextareaComponent from './note/note.textarea.component';
import NoteMenuComponent from './note-menu/note.menu.component';
import NoteListComponent from './note/note.list.component';
import InputTagComponent from './tags/inputTag.component';
import SelectTagComponent from './tags/selectTag.component';

export default class NoteMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.unmounted = false;
    this.cancelRequests = [];
    this.state = {
      notesList: [],
      noteSelected: {}
    }
  }

  selectNote = (note) => {
    this.setState({noteSelected: note});
  }

  shouldCancelAllRequest = (reason) => {
    if (reason) {
      for(let i in this.cancelRequests) {
        this.cancelRequests[i]();
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      let xhrPromise = NoteAPI.getNotes();
      this.cancelRequests.push(xhrPromise.cancel);
      this.shouldCancelAllRequest(this.unmounted);
      xhrPromise.request.then(
        response => {
          this.setState({notesList: response.data.notes}, ()=>{
            if (this.state.notesList.length > 0) {
              let noteSelected = this.state.notesList[0];
              this.setState({noteSelected});
            }
          });
          console.log('list response', response);
        }
      ).catch(
        error => {
          if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log('error != 2xx', error)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('error throw', error);
          }
          console.log('catch error', error);
        }
      );
    }, 1000);
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    let {notesList, noteSelected} = this.state;
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
          <NoteListComponent notesList={notesList} noteSelected={noteSelected} selectNote={this.selectNote}/>
          <NoteTextareaComponent note={noteSelected} />
        </div>
      </div>
    )
  }
}
