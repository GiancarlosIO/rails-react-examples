import React from 'react';

export default class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {tempData: data} = this.props;
    let iconWeatherURL = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    return (
      <div className="row">
        <div className="weather__message">
          <div className="weather__message__header">
            <h4> {data.name} - {data.sys.country}</h4>
            <h5>Weather</h5>
            <p>{data.weather[0].description} - <img src={iconWeatherURL} alt={data.weather[0].description} /></p>
          </div>
          <div className="weather__message__item">
            <span>Temperature</span>
            <p>{data.main.temp}º</p>
          </div>
          <div className="weather__message__item">
            <span>Temperature Maximun</span>
            <p>{data.main.temp_max}º</p>
          </div>
          <div className="weather__message__item">
            <span>Temperature Minimun</span>
            <p>{data.main.temp_min}º</p>
          </div>
          <div className="weather__message__item">
            <span>Humidity</span>
            <p>{data.main.humidity}</p>
          </div>
          <div className="weather__message__item">
            <span>Pressure</span>
            <p>{data.main.pressure}</p>
          </div>
        </div>
      </div>
    )
  }
}
