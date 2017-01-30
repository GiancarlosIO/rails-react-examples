import React from 'react';

export default class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="weather__message">
          <div className="weather__message__header">
            <h4> Ica - PE</h4>
            <h5>Weather</h5>
            <span>(Clear Sky)</span>
          </div>
          <div className="weather__message__item">
            <span>Temperature</span>
            <p>123</p>
          </div>
          <div className="weather__message__item">
            <span>Temperature Maximun</span>
            <p>123</p>
          </div>
          <div className="weather__message__item">
            <span>Temperature Minimun</span>
            <p>123</p>
          </div>
          <div className="weather__message__item">
            <span>Humidity</span>
            <p>123</p>
          </div>
          <div className="weather__message__item">
            <span>Pressure</span>
            <p>123</p>
          </div>
        </div>
      </div>
    )
  }
}
