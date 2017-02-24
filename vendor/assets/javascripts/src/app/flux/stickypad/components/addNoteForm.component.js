import React from 'react';
import AppActions from '../actions/app.actions';
import AppStore from '../stores/app.store';

export default class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    let text = this.inputText.value;
    if (text.length > 0) {
      AppActions.addNote({text});
      this.inputText.value = '';
    }
  }

  render() {
    return (
      <div>
        <h4 className="text-center text-grey">Add a note</h4>
        <form onSubmit={this.onSubmit}>
          <div className="row center-xs">
            <div className="col-xs-12 padding-none margin-bottom-15">
                <textarea className="form__input margin--right-none no-resize height--200" ref={(el) => this.inputText = el} placeholder="Note" />
            </div>
            <div className="col-xs-12 padding-none">
              <button className="button button--medium button--emerald" type="submit">
                Add note
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
