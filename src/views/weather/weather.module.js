import uirouter from 'angular-ui-router';
import './weather.style.scss';
import WeatherConfig from './weather.config';

export default angular
  .module('tgh.view.weather', [
    uirouter
  ])
  .config(WeatherConfig);