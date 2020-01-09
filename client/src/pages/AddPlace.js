import React from 'react';
import Input from '../components/general/Input';
import TextArea from '../components/general/TextInput';
import { Button } from '../components/general/Button';
import { Label } from '../components/general/Label';
import AddMarkerMap from '../components/map/AddMarkerMap';
import {
  AddPlaceContainer as Container,
  MapContainer,
  RateContainer
} from '../components/general/Container';
import { CameraInput } from '../components/general/Input';
import { AddPlaceHeadline as Headline } from '../components/general/Headline';
import { RateInput, Form } from '../components/general/Input';

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
    img: '',
    lng: 0,
    lat: 0
  });

  function handleImage(event) {
    const formData = new FormData();
    const createDate = Date.now();
    const xhr = new XMLHttpRequest();
    const url = `https://api.cloudinary.com/v1_1/befamily/upload`;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    formData.append('upload_preset', 'nd1vsnsz');
    formData.append('file', event.target.files[0], createDate);
    formData.append('name', createDate);
    formData.append('public_id,', createDate);
    console.log(createDate);
    xhr.send(formData);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var url = response.secure_url;
        setPlace({ ...place, img: url });
      }
    };
  }

  function handleChange(event) {
    setPlace({
      ...place,
      [event.target.name]: event.target.value,
      lng: JSON.parse(sessionStorage.getItem('markerlng')),
      lat: JSON.parse(sessionStorage.getItem('markerlat'))
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch('/api/places', {
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
      rate: [],
      img: '',
      lng: '',
      lat: ''
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
        <RateContainer>
          {[1, 2, 3, 4, 5].map(value => (
            <RateInput
              key={value}
              type="button"
              name="rate"
              value={value}
              active={value === place.rate[0]}
              onClick={() =>
                setPlace({
                  ...place,
                  rate: [value]
                })
              }
            />
          ))}
        </RateContainer>
        <Headline>Foto</Headline>

        <Label>
          <CameraInput type="file" name="img" accepnt="image/*" onChange={handleImage} />
        </Label>
        <Button>bestätigen</Button>
      </Form>
    </Container>
  );
}
