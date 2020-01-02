import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/general/Input';
import TextArea from '../components/general/TextInput';
import Button from '../components/general/Button';
import AddMarkerMap from '../components/map/AddMarkerMap';
import {
  Container,
  Form,
  CameraInput,
  Label,
  Headline,
  Rate,
  RateInput
} from '../components/general/AddPlaceComponents';

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  max-width: 300px;
  margin: 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 2px solid black;
`;

export default function AddPlace() {
  const [place, setPlace] = React.useState({
    name: '',
    category: 'Spielplatz',
    detail: '',
    age: '0-2Jahre',
    street: '',
    city: '',
    zip: '',
    web: '',
    rate: '',
    img: ''
  });

  function handleChange(event) {
    setPlace({
      ...place,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:3004/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(place)
    });
    setPlace({
      name: '',
      category: 'Spielplatz',
      detail: '',
      age: '0-2Jahre',
      street: '',
      city: '',
      zip: '',
      quarter: '',
      web: '',
      rate: '',
      img: ''
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Headline>Neuen Ort eintragen</Headline>

        <Label>
          Name des Ortes
          <Input type="text" name="name" required value={place.name} onChange={handleChange} />
        </Label>
        <Label>
          Kategorie
          <select name="category" onChange={handleChange} value={place.category}>
            <option value="Spielplatz">Spielplatz</option>
            <option value="Schwimmbad">Schwimmbad</option>
            <option value="Cafe">Cafe</option>
          </select>
        </Label>
        <Label>
          Beschreibung
          <TextArea name="detail" onChange={handleChange} value={place.detail} rows="10" />
        </Label>
        <Label>
          Altersgruppe
          <select name="age" onChange={handleChange} value={place.age}>
            <option value="0-2 Jahre">0-2 Jahre</option>
            <option value="3-6 Jahre">3-6 Jahre</option>
            <option value="7-10 Jahre">7-10 Jahre</option>
            <option value="ab 11 Jahre">ab 11 Jahre</option>
          </select>
        </Label>
        <Headline>Karte</Headline>
        <MapContainer>
          <AddMarkerMap />
        </MapContainer>
        <Headline> Adresse </Headline>
        <Label>
          Straße/Hausnummer
          <Input onChange={handleChange} value={place.street} name="street" type="text" required />
        </Label>
        <Label>
          Ort
          <Input onChange={handleChange} name="city" value={place.city} type="text" required />
        </Label>
        <Label>
          Postleitzahl
          <Input onChange={handleChange} name="zip" value={place.zip} type="text" required />
        </Label>

        <Label>
          Stadtteil
          <Input
            onChange={handleChange}
            name="quarter"
            value={place.quarter}
            type="text"
            required="true"
          />
        </Label>
        <Label>
          Webseite
          <Input onChange={handleChange} name="web" value={place.web} type="text" />
        </Label>
        <Headline>Bewertung</Headline>
        <Rate>
          {[1, 2, 3, 4, 5].map(value => (
            <RateInput
              key={value}
              type="button"
              name="rate"
              value={value}
              active={value === place.rate}
              onClick={() =>
                setPlace({
                  ...place,
                  rate: value
                })
              }
            />
          ))}
        </Rate>
        <Headline>Foto</Headline>

        <Label>
          <CameraInput
            type="file"
            name="img"
            accept="image/*"
            value={place.img}
            onChange={handleChange}
          />
        </Label>
        <Button>bestätigen</Button>
      </Form>
    </Container>
  );
}
