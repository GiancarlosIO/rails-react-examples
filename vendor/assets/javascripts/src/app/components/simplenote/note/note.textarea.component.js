import React from 'react';

export default class NoteTextareaComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    let text = this.textarea.value;
    if (text.length > 0) {
      this.props.handleChangeTextarea(text);
    }
  }

  render() {
    let {note} = this.props;
    return (
      <div className="column--6 padding--rl-10 note__column-right note__textarea">
        <textarea value={note.text} onChange={this.onChange} ref={ el => this.textarea = el }/>
      </div>
    )
  }
}

NoteTextareaComponent.propTypes = {
  note: React.PropTypes.object.isRequired
}
