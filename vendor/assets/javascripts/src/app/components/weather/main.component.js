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
      tempData: {}
    };
  }

  getTempData = () => {
    let {location} = this.state;
    this.xhrTempData = WeatherAPI.getTempData(location);
    this.promiseTempData = this.xhrTempData.then(
      (data) => {
        this.setState({
          tempData: data
        }, () => {console.log(this.state)});
      },
      (error) => {
        console.log(error);
        this.setState({
          tempData: {
            cod: 401,
            message: "Error server"
          }
        })
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

  render() {
    return (
      <div className="row">
        <div className="column--300 weather">
          <SearchComponent />
          <InfoComponent />
        </div>
      </div>
    )
  }
}
