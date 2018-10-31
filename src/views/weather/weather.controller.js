/* eslint-disable no-console */
export default class WeatherController {
  constructor (WeatherService, APIUtils, $scope) {
    'ngInject';

    this.weathers = [];
    this.WeatherService = WeatherService;
    this.APIUtils = APIUtils;
    this.getCurrentLocation();

    this.unit = 'C';
    this.city = '';
    this.autoCompleteOptions = {
      watchEnter: true,
      types: '(cities)'
    };

    $scope.$watch('vm.unit', (current, original) => {
      current && original && current !== original && this.loadWeather(this.location.lat, this.location.lon, this.unit);
    });

    $scope.$on('ON_PLACE_CHANGED', (event, data) => {
      this.location = {
        lat: data.geometry.location.lat(),
        lon: data.geometry.location.lng(),
        city: data.formatted_address
      };

      this.loadWeather(this.location.lat, this.location.lon, this.unit);
    });
  }

  loadWeather (lat, lon, unit) {
    this.WeatherService.getWeatherByLatitudeAndLongitude(lat, lon, unit === 'C' ? 'metric' : 'imperial')
      .then((response) => {
        this.weathers = this.WeatherService.groupWeatherByDates(response && response.list || []);
        this.displayUnit = this.unit;
      })
      .catch((error) => console.error(error));
  }

  getCurrentLocation () {
    this.APIUtils.getCurrentLocation()
      .then((response) => {
        this.loadWeather(response.lat, response.lon, this.unit);
        this.location = {
          lat: response.lat,
          lon: response.lon,
          city: `${response.city} ${response.region}, ${response.country}`
        };
      })
      .catch((error) => console.error(error));
  }

  switchTemperatureUnit() {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }

  getShortDay(date) {
    return date && this.WeatherService.getDay(date).short || '';
  }

  getFullDay(date) {
    return date && this.WeatherService.getDay(date).full || '';
  }

  getWeatherIcon(icon) {
    return this.WeatherService.getWeatherIconUrl(icon);
  }

  getWeatherImage(icon) {
    return this.WeatherService.getWeatherImageResource(icon);
  }
}