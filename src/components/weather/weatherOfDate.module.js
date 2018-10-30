import WeatherOfDate from './weatherOfDate.component';

export default angular.module('tgh.component.weather', [])
  .directive('weatherOfDate', () => new WeatherOfDate());