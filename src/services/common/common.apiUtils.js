/* eslint-disable no-console */

export default function APIUtils ($http, Constants) {
  'ngInject';

  function getCurrentLocation () {
    return $http.get(Constants.LOCATION_API_URL).then((response) => {
      return response && response.data || response.data;
    });

  }

  return {
    getCurrentLocation
  };
}