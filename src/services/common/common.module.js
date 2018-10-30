import APIUtils from './common.apiUtils';
import constants from './common.constants';

export default angular
  .module('tgh.service.common', [])
  .factory('APIUtils', APIUtils)
  .constant('Constants', constants);