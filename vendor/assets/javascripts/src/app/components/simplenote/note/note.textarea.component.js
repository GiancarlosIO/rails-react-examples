import React from 'react';

export default class NoteTextareaComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    let text = this.textarea.value;
    if (text.length > 0) {
      this.props.handleChangeTextarea(text);
    } else {
      this.props.handleChangeTextarea('');
    }
  }

  componentDidMount() {
    if (this.props.focus) {
      this.textarea.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.focus) {
      this.textarea.focus();
    }
  }

  render() {
    let {note, focus} = this.props;
    let isReadOnly = note.id === undefined;
    return (
      <div className="column--6 padding--rl-10 note__column-right note__textarea">
        <textarea value={note.text} onChange={this.onChange} ref={ el => this.textarea = el } readOnly={isReadOnly}/>
      </div>
    )
  }
}

NoteTextareaComponent.propTypes = {
  note: React.PropTypes.object.isRequired,
  handleChangeTextarea: React.PropTypes.func.isRequired
}
