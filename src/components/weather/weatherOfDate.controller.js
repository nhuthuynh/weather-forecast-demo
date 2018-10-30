/* eslint-disable no-console */
export default class WeatherOfDateController {
  constructor(WeatherService) {
    'ngInject';
    this.WeatherService = WeatherService;
  }

  getShortDay(date) {
    return date && this.WeatherService.getDay(date).short || '';
  }

  getFullDay(date) {
    return date && this.WeatherService.getDay(date).full || '';
  }

  getDate(date) {
    return date && this.WeatherService.getDate(date) || '';
  }

  getWeatherIcon(icon) {
    return this.WeatherService.getWeatherIconUrl(icon);
  }

  getWeatherImage(icon) {
    return this.WeatherService.getWeatherImageResource(icon);
  }
}