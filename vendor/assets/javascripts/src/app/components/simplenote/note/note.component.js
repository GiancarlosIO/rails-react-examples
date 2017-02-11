import React from 'react';

export default class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    let note = this.props.note;
    this.props.handleClick(note);
  }

  render() {
    let {selected, note} = this.props;
    let classNote = selected ? 'selected' : '';
    let text = `${note.text.substring(0,40)}${note.text.length > 40 ? '...' : ''}`;
    return (
      <div className={`note__list__item ${classNote}`} onClick={this.onClick}>
        {text}
      </div>
    )
  }
}

NoteComponent.propTypes = {
  selected: React.PropTypes.bool.isRequired,
  note: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
}
