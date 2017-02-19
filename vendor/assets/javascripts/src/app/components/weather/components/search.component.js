import React from 'react';

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    let location = this.refs.location.value;
    if (location.length > 0) {
      this.props.handleChange(location);
    } else {
      this.props.handleChange('ica');
    }
  }

  render() {
    return (
      <div className="row margin-auto weather__form">
        <div className="weather__form__header">
          <h4>Search the weather information of your city!</h4>
        </div>
        <div className="weather__form__input">
          <label>Write the name of your city</label>
          <input type="text" placeholder="ica" onChange={this.onChange} ref="location"/>
        </div>
      </div>
    )
  }
}
