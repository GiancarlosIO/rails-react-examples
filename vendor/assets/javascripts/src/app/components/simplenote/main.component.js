import React from 'react';

import NoteAPI from './api/note.api';

import MenuComponent from './menu/menu.component';
import NoteTextareaComponent from './note/note.textarea.component';
import NoteMenuComponent from './note-menu/note.menu.component';
import NoteListComponent from './note/note.list.component';
import SelectTagComponent from './tags/selectTag.component';
import TagBarComponent from './tags/tagBar.component';

export default class NoteMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.unmounted = false;
    this.cancelRequests = [];
    this.state = {
      notesList: [],
      noteSelected: {},
      saveStatus: '',
      searchText: '',
      loading: true,
      focusTextarea: true
    }
  }

  // ====== custom events =======
  selectNote = (note) => {
    this.setState({noteSelected: note});
  }
  handleChangeTextarea = (text) => {
    this.updateNote(this.state.noteSelected.id, text);
  }
  handleSearchChange = (text)  => {
    this.setState({searchText: text});
  }
  handleAddClick = () => {
    this.createNote();
  }
  handleDeleteClick = () => {
    let id = this.state.noteSelected.id;
    this.deleteNote(id);
  }
  // ====== end custom events =======

  // ====== custom call api functions =======
  shouldCancelAllRequest = (reason) => {
    if (reason) {
      for(let i in this.cancelRequests) {
        this.cancelRequests[i]();
      }
    };
  }
  getNotesList = () => {
    setTimeout(() => {
      let xhrPromise = NoteAPI.getNotes();
      this.cancelRequests.push(xhrPromise.cancel);
      this.shouldCancelAllRequest(this.unmounted);
      xhrPromise.request.then(
        response => {
          let notesList = response.data.notes;
          this.setState({
            notesList: notesList,
            noteSelected: notesList.length > 0 ? notesList[0] : {},
            loading: false
          });
        }
      ).catch( error => { console.log('error to get notesList', error); }
      );
    }, 1000);
  }
  updateNote = (id, text) => {
    this.setState({saveStatus: 'saving...'}, () => {
      let xhrPromise = NoteAPI.updateNote(id, text);
      this.cancelRequests.push(xhrPromise.cancel);
      this.shouldCancelAllRequest(this.unmounted);
      xhrPromise.request.then(
        response => {
          if (response.statusText === 'OK') {
            let newNotesList = this.state.notesList.map(
              (note) => {
                if (note.id == id) { note.text = text; };
                return note
              }
            );
            this.setState({
              notesList: newNotesList,
              saveStatus: 'saved!'
            });
          }
        }
      ).catch( error => {
        console.log('updated failed', error)
      });
    })
  }
  createNote = () => {
    this.setState({loading: true}, () => {
      let xhrPromise = NoteAPI.createNote();
      this.cancelRequests.push(xhrPromise.cancel);
      this.shouldCancelAllRequest(this.unmounted);
      xhrPromise.request.then(
        response => {
          let {notesList} = this.state;
          if (response.statusText === 'OK') {
            let newNotesList = [response.data].concat(notesList);
            this.setState({
              notesList: newNotesList,
              noteSelected: newNotesList[0],
              loading: false
            });
          }
        }
      ).catch((error) => { console.log(error); })
    });
  }
  deleteNote = (id) => {
    this.setState({loading: true}, () => {
      if (this.state.notesList.length > 0) {
        let xhrPromise = NoteAPI.deleteNote(id);
        this.cancelRequests.push(xhrPromise.cancel);
        this.shouldCancelAllRequest(this.unmounted);
        xhrPromise.request.then(
          response => {
            let newNotesList = [].concat(this.state.notesList);
            let newNoteSelected = {};
            let note = newNotesList.find( note => note.id === id );
            let index = newNotesList.indexOf(note);
            newNoteSelected = newNotesList[index + 1] ? newNotesList[index + 1] : newNotesList[0] ;
            newNotesList.splice(index, 1)
            if (newNotesList.length == 0) {
              newNoteSelected = {text: ''};
            }
            this.setState({
              notesList: newNotesList,
              noteSelected: newNoteSelected,
              loading: false
            });
          }
        ).catch( error => console.log(error) );
      } else {
        this.setState({ loading: false });
      }
    });
  }
// ====== end custom call api functions =======

  componentDidMount() {
    this.getNotesList();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    let {notesList, noteSelected, saveStatus, searchText, loading, focusTextarea} = this.state;
    let notes = searchText.length > 0 ? notesList.filter( note => (note.text.indexOf(searchText) > -1) ) : notesList ;
    let notesItems = () => {
      if (loading) {
        return (<div className="row">Loading</div>);
      } else {
        return (
          <div className="row">
            <NoteListComponent notesList={notes} noteSelected={noteSelected} selectNote={this.selectNote}/>
            <NoteTextareaComponent note={noteSelected} handleChangeTextarea={this.handleChangeTextarea}/>
          </div>
        )
      }
    }
    return (
      <div>
        <div className="row">
          <NoteMenuComponent handleSearchChange={this.handleSearchChange} handleAddClick={this.handleAddClick}/>
          <MenuComponent handleDeleteClick={this.handleDeleteClick}/>
        </div>
        <div className="row">
          <SelectTagComponent />
          <TagBarComponent saveStatus={saveStatus}/>
        </div>
        <div className="row">
          {notesItems()}
        </div>
      </div>
    )
  }
}
