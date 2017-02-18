import React from 'react';

export default class SelectTagComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = () => {
    this.props.handleSelectTagChange(this.select.value);
  }

  render() {
    let {tagsList} = this.props;
    let optionTags = tagsList.map( (tag, index) => (<option key={tag.id} value={tag.tag}>{tag.tag}</option>));
    return (
      <div className="column--4 flex-center position-fixed note__column-left note__select">
        <select onChange={this.onChange} ref={(select) => this.select = select }>
          <option value=''>...</option>
          {optionTags}
        </select>
      </div>
    )
  }
}

SelectTagComponent.propTypes = {
  tagsList: React.PropTypes.array,
  handleSelectTagChange: React.PropTypes.func.isRequired
}
