import React from 'react';

export default class InputTagComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    this.props.handleOnChange(this.input.value);
  }

  render() {
    let {noteSelected} = this.props;
    let tag = noteSelected.tag == null ? '' : noteSelected.tag;
    return (
      <div className="column--8">
        <input
          type="text"
          placeholder="tag"
          className="input__text"
          value={tag}
          onChange={this.onChange}
          ref={(input) => this.input = input }
          />
      </div>
    )
  }
}

InputTagComponent.defaultProps = {
  noteSelected: {id: undefined, tag: ''}
}

InputTagComponent.propTypes = {
  handleOnChange: React.PropTypes.func.isRequired,
  noteSelected: React.PropTypes.object.isRequired
}
