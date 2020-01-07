const { getCollection } = require('./database');
const { ObjectID } = require('mongodb');

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

async function getPlaceById(id) {
  const placesCollection = await getCollection(collectionName);
  const objectId = new ObjectID(id);
  const place = await placesCollection.findOne({ _id: objectId });
  if (!place) {
    throw new Error('Can not find place');
  }
  return place;
}

exports.getPlaces = getPlaces;
exports.setPlaces = setPlaces;
exports.getPlaceById = getPlaceById;
