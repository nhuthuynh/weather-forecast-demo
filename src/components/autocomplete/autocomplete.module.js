import AutoComplete from './autocomplete.component';

export default angular.module('tgh.component.autocomplete', [])
  .directive('ngAutocomplete', () => new AutoComplete());