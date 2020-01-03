const { getCollection } = require('./database');

const collectionName = 'places';

async function setPlaces(places) {
  const eventCollection = await getCollection(collectionName);
  await eventCollection.insertOne({ ...places });
}

async function getPlaces() {
  const placesCollection = await getCollection(collectionName);
  const cursor = await placesCollection.find();
  const results = cursor.toArray();
  return results;
}

exports.getPlaces = getPlaces;
exports.setPlaces = setPlaces;
