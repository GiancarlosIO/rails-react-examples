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
      notesFiltered: [],
      tagsList: [],
      loading: true,
      focusTextarea: true
    }
  }

  // ====== custom events =======
  selectNote = (note) => {
    this.setState({noteSelected: note, focusTextarea: true, saveStatus: ''});
  }
  handleChangeTextarea = (text) => {
    let {noteSelected, notesList} = this.state;
    noteSelected.text = text;
    let newNotesList = notesList.map((note) => {
      if (note.id == noteSelected.id) {
        let newNote = note;
        newNote.text = text;
        return newNote;
      } else { return note };

    });
    let newNoteSelected = noteSelected;
    let shouldCancelUpdates = this.cancelRequests.length > 0;
    this.shouldCancelAllRequest(shouldCancelUpdates);
    this.setState({
      notesList: newNotesList,
      noteSelected: newNoteSelected
    }, () => {
      this.updateNote(this.state.noteSelected.id, {note: {text}});
    })
  }
  handleSearchChange = (text)  => {
    this.setState({searchText: text, focusTextarea: false, loading: true}, () => {
      if (text.length > 0) {
        let notesFiltered = this.state.notesList.filter( note  => {
          return note.text.indexOf(text) > -1;
        });
        let noteSelected = this.state.noteSelected;
        let newNoteSelected = {};
        if (notesFiltered.findIndex( note => note === noteSelected ) > 0) {
          newNoteSelected = noteSelected;
        } else {
          newNoteSelected = notesFiltered[0];
        }
        if (notesFiltered.length == 0) {
          newNoteSelected = {id: undefined, text: ''};
        }
        this.setState({
          notesFiltered,
          noteSelected: newNoteSelected,
          focusTextarea: false,
          loading: false
        });
      } else {
        let newNoteSelected = this.state.notesList[0];
        this.setState({
          noteSelected: newNoteSelected,
          notesFiltered: [],
          focusTextarea: true,
          loading: false
        })
      }
    });
  }
  handleAddClick = () => {
    let {searchText} = this.state;
    this.createNote(searchText);
  }
  handleDeleteClick = () => {
    let {noteSelected} = this.state;
    if (noteSelected.id !== undefined) {
      this.deleteNote(noteSelected.id);
    }
  }
  handleSelectTagChange = (tag) => {
    console.log('handle select');
    let {notesList, notesFiltered, noteSelected} = this.state;
    let notes = notesList.filter((note) => note.tag === tag );
    let selected = notes.find((note) => note.id == noteSelected.id);
    let newNoteSelected = {};
    if (notes.length === 0) {
      newNoteSelected = notesList[0];
    } else {
      newNoteSelected = selected ? selected : notes[0];
    };
    this.setState({
      noteSelected: newNoteSelected,
      notesFiltered: notes,
      searchText: tag.length > 0 ? `tag:${tag}` : ''
    });
  }
  handleChangeInputTag = (value) => {
    let {noteSelected, tagsList} = this.state;
    noteSelected.tag = value;
    this.setState({
      noteSelected,
      focusTextarea: false
    }, () => {
      console.log('handleChangeInputTag', value);
      this.updateNote(this.state.noteSelected.id, {note: {tag: value}});
    });
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
    let xhrPromise = NoteAPI.getNotes();
    this.cancelRequests.push(xhrPromise.cancel);
    this.shouldCancelAllRequest(this.unmounted);
    xhrPromise.request.then(
      response => {
        let notesList = response.data.notes;
        let tagsList = response.data.tags.filter((note) => note.tag !== null);
        this.setState({
          notesList,
          tagsList,
          noteSelected: notesList.length > 0 ? notesList[0] : {},
          loading: false
        });
      }
    ).catch( error => { console.log('error to get notesList', error); }
    );
  }
  updateNote = (id, params) => {
    this.setState({saveStatus: 'saving...'}, () => {
      let xhrPromise = NoteAPI.updateNote(id, params);
      this.cancelRequests.push(xhrPromise.cancel);
      this.shouldCancelAllRequest(this.unmounted);
      xhrPromise.request.then(
        response => {
          if (response.statusText === 'OK') {
            if (params.note.tag !== undefined) {
              let {tagsList, noteSelected} = this.state;
              let tag = tagsList.find( tag => tag.id == id )
              if (tag) {
                tagsList[tagsList.indexOf(tag)].tag = params.note.tag;
              } else { tagsList.push({id: noteSelected.id, tag: params.note.tag }) }
              this.setState({
                tagsList,
                saveStatus: 'saved'
              });
            } else {
              this.setState({
                saveStatus: 'saved!'
              });
            }
          }
        }
      ).catch( error => {
        console.log('updated failed', error)
      });
    })
  }
  createNote = (text) => {
    this.setState({loading: true}, () => {
      let xhrPromise = NoteAPI.createNote(text);
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
            }, () => {
              if (this.state.searchText.length > 0) {
                this.setState((prevState, props) => {
                  return {
                    notesFiltered: [prevState.noteSelected].concat(prevState.notesFiltered)
                  }
                })
              }
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
            let newNotesFiltered = this.state.notesFiltered;
            let newNotesList = [].concat(this.state.notesList);
            let newNoteSelected = {};
            let note = newNotesList.find( note => note.id === id );
            let index = newNotesList.indexOf(note);
            let noteF = newNotesFiltered.find( note => note.id === id );
            let indexF = newNotesFiltered.indexOf(note);
            if (this.state.searchText.length > 0) {
              if (newNotesFiltered.length == 1 ) {
                newNoteSelected = {text: ''};
              } else {
                newNoteSelected = newNotesFiltered[indexF + 1] ? newNotesFiltered[indexF + 1] : newNotesFiltered[0];
              }
            } else {
              if (newNotesList.length == 1) {
                newNoteSelected = {text: ''};
              } else {
                newNoteSelected = newNotesList[index + 1] ? newNotesList[index + 1] : newNotesList[0] ;
              }
            }
            newNotesFiltered.splice(indexF, 1)
            newNotesList.splice(index, 1)
            this.setState({
              notesList: newNotesList,
              notesFiltered: newNotesFiltered,
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
    let {notesList, notesFiltered, noteSelected, saveStatus, searchText, loading, focusTextarea, tagsList} = this.state;
    let notes = searchText.length > 0 ? notesFiltered : notesList;
    let notesItems = () => {
      if (loading) {
        return (<div className="row">Loading</div>);
      } else {
        return (
          <div className="row">
            <NoteListComponent notesList={notes} noteSelected={noteSelected} selectNote={this.selectNote}/>
            <NoteTextareaComponent note={noteSelected} handleChangeTextarea={this.handleChangeTextarea} focus={focusTextarea}/>
          </div>
        )
      }
    }
    return (
      <div>
        <div className="row">
          <NoteMenuComponent handleSearchChange={this.handleSearchChange} searchText={searchText} handleAddClick={this.handleAddClick}/>
          <MenuComponent handleDeleteClick={this.handleDeleteClick}/>
        </div>
        <div className="row">
          <SelectTagComponent tagsList={tagsList} handleSelectTagChange={this.handleSelectTagChange}/>
          <TagBarComponent saveStatus={saveStatus} noteSelected={noteSelected} handleChangeInputTag={this.handleChangeInputTag}/>
        </div>
        <div className="row">
          {notesItems()}
        </div>
      </div>
    )
  }
}
