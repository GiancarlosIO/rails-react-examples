import React from 'react';

export default class NoteAddComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="column--2 flex-center ">
        <div className="icon__container" onClick={this.onClick}>
          <i className="fa fa-plus"></i>
        </div>
      </div>
    )
  }
}

NoteAddComponent.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}
