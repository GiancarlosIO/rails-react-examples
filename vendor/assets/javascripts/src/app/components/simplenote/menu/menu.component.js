import React from 'react';

import NoteDeleteComponent from './note.delete.component';
import NoteInfoComponent from './note.info.component';

export default class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleDeleteClick();
  }

  render() {
    return (
      <div className="column--6 row margin-auto flex--row--start padding--rl-10 note__column-right">
        <NoteInfoComponent />
        <NoteDeleteComponent handleClick={this.handleClick}/>
      </div>
    )
  }
}

MenuComponent.propTypes = {
  handleDeleteClick: React.PropTypes.func.isRequired
}
