import React from 'react';

// API
import WeatherAPI from './api/weather.api';

// Components
import SearchComponent from './components/search.component';
import InfoComponent from './components/info.component';

export default class WeatherMainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "ica",
      status: "loading",
      tempData: {}
    };
  }

  getTempData = () => {
    let {location} = this.state;
    this.xhrTempData = WeatherAPI.getTempData(location);
    this.promiseTempData = this.xhrTempData.then(
      (data) => {
        this.setState({
          tempData: data,
          status: "loaded"
        });
      },
      (error) => {
        console.log(error);
        if (error.responseText) {
          let responseText = JSON.parse(error.responseText);
          this.setState({
            tempData: {
              cod: responseText.cod,
              message: responseText.message
            },
            status: "error"
          })
        }
      }
    );
  }

  componentDidMount() {
    this.getTempData();
  }

  componentWillUnmount() {
    if (this.xhrTempData && this.xhrTempData.abort) {
      this.xhrTempData.abort();
    }
  }

  handleChange = (location) => {
    this.setState(
      {location, status: "loading"},
      () => this.getTempData());
  }

  render() {
    let {cod, message} = this.state.tempData;
    let {status} = this.state;
    let renderWithStatus = () => {
      if (status === "loading") {
        return (
          <div className="weather__loading">
            <h3>Loading</h3>
          </div>
        )
      } else if (status === "loaded") {
        return (
          <InfoComponent {...this.state}/>
        )
      } else if (status === "error") {
        return (
          <div className="weather__error">
            <h3>{message}</h3>
          </div>
        )
      }
    }
    return (
      <div className="row margin-auto">
        <div className="column--300 weather">
          <SearchComponent handleChange={this.handleChange}/>
          {renderWithStatus()}
        </div>
      </div>
    )
  }
}
