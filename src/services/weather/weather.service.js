/* eslint-disable no-console */
export default class WeatherService {
  constructor(Constants, $http) {
    'ngInject';
    this.constants = Constants;
    this.$http = $http;
    this.url = `${this.constants.API_BASE_URL}&`;
    this.weekDay = [{ full: 'Sunday', short: 'Sun' },
      { full: 'Monday', short: 'Mon' },
      { full: 'Tuesday', short: 'Tue' },
      { full: 'Wednesday', short: 'Wed' },
      { full: 'Thursday', short: 'Thu' },
      { full: 'Friday', short: 'Fri' },
      { full: 'Saturday', short: 'Sat' }];
  }

  getWeatherByCityID(cityID) {
    return this.$http.get(`${this.url}id=${cityID}`).then((response) => {
      return response && response.data || response.data;
    }).catch((error) => console.error(error));
  }

  getWeatherByLatitudeAndLongitude(lat, lon, unit) {
    return this.$http.get(`${this.url}lat=${lat}&lon=${lon}&units=${unit}`).then((response) => {
      return response && response.data || response.data;
    }).catch((error) => console.error(error));
  }

  groupWeatherByDates(weathers) {
    let groupedWeathersByDates = {};

    weathers.forEach((weather) => {
      if (Object.keys(groupedWeathersByDates).length === 5) { return; }
      let dateString = weather.dt_txt.split(' ')[0];

      if (!groupedWeathersByDates[dateString]) { groupedWeathersByDates[dateString] = weather; }

    });

    return groupedWeathersByDates;
  }

  getDay(date) {
    let newDate = new Date(date),
      today = new Date();

    return newDate && newDate.getDay && newDate.getDay() === today.getDay() ? { full: 'Today', short: 'Today' } : this.weekDay[newDate.getDay()];
  }

  getWeatherIconUrl(icon) {
    return `${this.constants.WEATHER_ICON_URL}${icon}.png`;
  }

  getWeatherImageResource(icon) {
    let name = `${icon}.png`;

    return `./build/images/${name}`;
  }

  getDate(date) {
    let newDate = new Date(date);

    return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`;
  }

}