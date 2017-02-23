import React from 'react';
import AppActions from './actions/app.actions';
import AppStore from './stores/app.store';
import ApiNotes from './utils/api/api.notes';

import AddNoteForm from './components/addNoteForm.component';
import NoteList from './components/noteList.component';

// ===== Get the stickypads list ===== //
ApiNotes.getNotes().request.then(
  (response) => {
    AppActions.receiveNotes(response.data.pads);
  },
  (error) => { console.log(error); }
).catch( error => console.log(error));
// ===== end of Get the stickypads list ===== //

// === function callback to get the state ==== //
function getAppState() {
  return {
    notes: AppStore.getNotes()
  }
}// === function callback to get the state ==== //

export default class StickyPadMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    console.log(this.state);
    let {notes} = this.state;
    return (
      <div className="row">
        <div className="col-xs-12  col-sm-3  col-md-2 col-lg-2">
          <AddNoteForm />
        </div>
        <div className="col-xs-12 col-sm-9 col-md-10 col-lg-10">
          <div className="box">
            <NoteList notes={notes}/>
          </div>
        </div>
      </div>
    )
  }

  _onChange = () => {
    this.setState(getAppState)
  }
}
