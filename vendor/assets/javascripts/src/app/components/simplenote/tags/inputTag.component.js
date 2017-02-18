import React from 'react';

export default class InputTagComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {noteSelected} = this.props;
    let tag = noteSelected.tag == null ? '' : noteSelected.tag;
    return (
      <div className="column--8">
        <input type="text" placeholder="tag" className="input__text" value={tag}/>
      </div>
    )
  }
}

InputTagComponent.defaultProps = {
  noteSelected: {id: undefined, tag: ''}
}

InputTagComponent.propTypes = {
  noteSelected: React.PropTypes.object.isRequired
}
