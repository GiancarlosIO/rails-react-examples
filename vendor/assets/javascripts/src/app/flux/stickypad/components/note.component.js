import React from 'react';
import AppActions from '../actions/app.actions';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  removeNote = () => {
    let {note} = this.props;
    AppActions.removeNote(note.id);
  }

  render() {
    let {note} = this.props
    return (
      <div className="sticky-pad__note" onDoubleClick={this.removeNote}>
        <p>
          {note.text}
        </p>
      </div>
    )
  }
}

Note.propTypes = {
  note: React.PropTypes.object.isRequired
}
