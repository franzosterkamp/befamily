require('dotenv').config();
const express = require('express');
const { dbInit } = require('./lib/database');
const { getPlaces, setPlaces, getPlaceById, updateRate } = require('./lib/places');
const path = require('path');

const app = express();
const db = process.env.DB_NAME;
const url = process.env.DB_ATLAS_URL;
const port = process.env.PORT;

app.use(express.json({ extended: false }));

app.get('/api/places', async (req, res) => {
  try {
    const result = await getPlaces();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.get('/api/places/:placeId', async (req, res) => {
  try {
    const placeId = req.params.placeId;
    const place = await getPlaceById(placeId);
    if (!place) {
      return res.status(404).end();
    }
    res.send(place);
  } catch (error) {
    console.error(error);
    return res.status(500).end(error.message);
  }
});

app.post('/api/places', async (req, res) => {
  const placesData = req.body;
  await setPlaces(placesData);
  res.end();
});

app.patch(`/api/places/:placeId`, async (req, res) => {
  const placeId = req.params.placeId;
  const newRate = req.body;
  await updateRate(newRate, placeId);
  res.end();
});

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

dbInit(url, db).then(async () => {
  console.log(`Database ${db} is ready`);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
