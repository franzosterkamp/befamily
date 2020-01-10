export default async function doFetch(url) {
  const response = await fetch(url);
  const newPlaces = await response.json();
  return newPlaces;
}
