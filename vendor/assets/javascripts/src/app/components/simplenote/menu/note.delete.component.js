import React from 'react';

export default class NoteDeleteComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="column--1 flex-center">
        <div className="icon__container" onClick={this.onClick}>
          <i className="fa fa-trash-o"></i>
        </div>
      </div>
    )
  }
}

NoteDeleteComponent.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}
