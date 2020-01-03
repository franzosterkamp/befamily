require('dotenv').config();
const express = require('express');
const { dbInit } = require('./lib/database');
const { getPlaces, setPlaces } = require('./lib/places');
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

app.post('/api/places', (req, res) => {
  const placesData = req.body;
  setPlaces(placesData);
  res.end();
});

dbInit(url, db).then(async () => {
  console.log(`Database ${db} is ready`);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
