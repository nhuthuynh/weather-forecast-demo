/* eslint-disable no-unused-vars,no-console */
import './weatherOfDate.component.scss';
import template from './weatherOfDate.component.html';
import WeatherOfDateController from './weatherOfDate.controller';

export default class WeatherOfDate {
  constructor() {
    this.template = template;
    this.restrict = 'E';
    this.require = 'ngModel';
    this.scope = {
      ngModel: '=',
      options: '=?',
      details: '=?',
      displayUnit: '='
    };
    this.controller = WeatherOfDateController;
    this.controllerAs = 'vm';
    this.bindToController = true;
  }

  link (scope, attrs, element, controller) {

  }
}