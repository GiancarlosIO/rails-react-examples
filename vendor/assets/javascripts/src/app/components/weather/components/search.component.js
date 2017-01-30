import React from 'react';

export default class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row weather__form">
        <form className="row">
          <div className="weather__form__header">
            <h4>Search the weather information for your city!</h4>
          </div>
          <div className="weather__form__input">
            <label>Write the name of your city</label>
            <input type="text" placeholder="ica" />
          </div>
        </form>
      </div>
    )
  }
}
