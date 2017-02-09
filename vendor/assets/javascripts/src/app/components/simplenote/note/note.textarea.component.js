import React from 'react';

export default class NoteTextareaComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {note} = this.props;
    return (
      <div className="column--6 padding--rl-10 note__column-right note__textarea">
        <textarea value={note.text} />
      </div>
    )
  }
}
