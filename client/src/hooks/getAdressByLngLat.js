export default async function getAddressByLngLat(markerPos) {
  const [lat, lng] = markerPos;
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${process.env.REACT_APP_GEOKEY}`
  );
  const fetchedResults = await response.json();
  const addressComponents = fetchedResults.results[0].components;

  const address = {
    street: addressComponents.road + ' ' + addressComponents.house_number,
    zip: addressComponents.postcode,
    city: addressComponents.city,
    lng: markerPos[1],
    lat: markerPos[0]
  };
  if (addressComponents.house_number === undefined) {
    address.street = addressComponents.road;
  }

  return address;
}
