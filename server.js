require('dotenv').config();
const express = require('express');
const { dbInit } = require('./lib/database');
const { getPlaces, setPlaces, getPlaceById, updateRate } = require('./lib/places');
const app = express();
const db = process.env.DB_NAME;
const url = process.env.DB_URL;
const port = process.env.PORT;

app.use(express.json({ extended: false }));

app.get('/api/places', async (req, res) => {
  try {
    const result = await getPlaces();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get('/api/places/:placeId', async (req, res) => {
  try {
    const placeId = req.params.placeId;
    const place = await getPlaceById(placeId);
    res.send(place);
  } catch (error) {
    console.error(error);
    return res.status(404).end('Error');
  }
});

app.post('/api/places', (req, res) => {
  const placesData = req.body;
  console.log(placesData);
  setPlaces(placesData);
  res.end();
});

app.patch(`/api/places/:placeId`, (req, res) => {
  console.log(req.body);
  const placeId = req.params.placeId;
  const newRate = req.body;
  updateRate(newRate, placeId);
  res.end();
});

dbInit(url, db).then(async () => {
  console.log(`Database ${db} is ready`);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
