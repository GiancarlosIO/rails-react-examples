const WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?appid=2a15bf2f02239e2fcc566ad41e8b46b3&units=metric"
const WeatherAPI = {
  getTempData: (location) => {
    let encodeLocation = encodeURIComponent(location);
    let requestURL = `${WEATHER_URL}&q=${encodeLocation}`;

    return $.ajax({
      url: requestURL,
      dataType: "json",
      cache: false,
      success: (data) => {},
      error: (error) => {}
    });
  }
};

export default WeatherAPI;
