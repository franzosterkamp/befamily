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
  const results = await cursor.toArray();
  results.map(result => {
    const sum = result.rate.reduce((rateSum, rate) => rateSum + rate, 0);
    let rate = sum / result.rate.length;
    rate = rate.toFixed(1);
    result.rate = rate;
  });
  return results;
}

async function getPlaceById(id) {
  const placesCollection = await getCollection(collectionName);
  const objectId = new ObjectID(id);
  const place = await placesCollection.findOne({ _id: objectId });
  const sum = place.rate.reduce((rateSum, rate) => rateSum + rate, 0);
  let rate = sum / place.rate.length;
  rate = rate.toFixed(1);
  place.rate = rate;
  if (!place) {
    throw new Error('Can not find place');
  }
  return place;
}

async function updateRate(newRate, id) {
  const placesCollection = await getCollection(collectionName);
  const objectId = new ObjectID(id);
  const newValue = newRate.newRate;
  const query = objectId;
  await placesCollection.updateOne({ _id: query }, { $push: { rate: newValue } });
}

exports.getPlaces = getPlaces;
exports.setPlaces = setPlaces;
exports.getPlaceById = getPlaceById;
exports.updateRate = updateRate;
