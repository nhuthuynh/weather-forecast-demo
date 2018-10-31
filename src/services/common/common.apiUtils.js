/* eslint-disable no-console,no-plusplus */

export default function APIUtils () {
  'ngInject';

  function getCurrentLocation () {
    return navigator && navigator.geolocation && new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        let geocoder = new google.maps.Geocoder(),
          latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        geocoder.geocode({ latLng }, (results, status) => {
          resolve(status === google.maps.GeocoderStatus.OK && results
            && {
              city: getCityName(results),
              lat: position.coords.latitude,
              lon: position.coords.longitude
            } || {});
        });

      }, (error) => reject(error));
    });
  }

  function getCityName(results) {
    let city;

    city = results.filter((el) => el.types.indexOf('colloquial_area') !== -1);

    return city && city[0] && city[0].formatted_address || '';
  }

  return {
    getCurrentLocation
  };
}