import WeatherController from './weather.controller';
import WeatherTemplate from './weather.template.html';

export default function WeatherConfig($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'weather',
    url: '/',
    template: WeatherTemplate,
    controller: WeatherController,
    controllerAs: 'vm',
    resolve: {

    }
  });
}