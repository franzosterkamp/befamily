import React from 'react';
import Input from '../components/general/Input';
import TextArea from '../components/general/TextInput';
import { Button } from '../components/general/Button';
import { Label } from '../components/general/Label';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import AddMarkerMap from '../components/map/AddMarkerMap';
import {
  AddPlaceContainer as Container,
  MapContainer,
  RateContainer
} from '../components/general/Container';
import { CameraInput } from '../components/general/Input';
import { AddPlaceHeadline as Headline } from '../components/general/Headline';
import { RateInput, Form } from '../components/general/Input';
import { ImgWrapper, SelectWrapper } from '../components/general/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { Option, Select } from '../components/general/SelectBox';

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const LngWarning = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  height: fit-content;
  color: red;
`;

export default function AddPlace() {
  const [place, setPlace] = React.useState({
    name: '',
    category: '',
    detail: '',
    age: '',
    street: '',
    city: '',
    zip: '',
    web: '',
    rate: [0],
    img: '',
    lng: '',
    lat: ''
  });

  const [isMarkerSet, setIsMarkerSet] = React.useState(false);

  const history = useHistory();

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
    xhr.send(formData);
    xhr.onreadystatechange = function() {
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
      lng: JSON.parse(sessionStorage.getItem('markerLng')),
      lat: JSON.parse(sessionStorage.getItem('markerLat'))
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!sessionStorage.getItem('markerLng')) {
      setIsMarkerSet(!isMarkerSet);
      window.location = 'http://localhost:3000/add/#card';
      return;
    } else {
      await fetch('/api/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
      });

      history.push('../info');

      sessionStorage.removeItem('markerLng');
      sessionStorage.removeItem('markerLat');

      setPlace({
        name: '',
        category: '',
        detail: '',
        age: '',
        street: '',
        city: '',
        zip: '',
        quarter: '',
        web: '',
        rate: [0],
        img: '',
        lng: '',
        lat: ''
      });
    }
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
          <Select name="category" onChange={handleChange} value={place.category}>
            {categoryList.map(value => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Label>
        <Label>
          Beschreibung
          <TextArea
            name="detail"
            type="text"
            required
            onChange={handleChange}
            value={place.detail}
            rows="10"
          />
        </Label>
        <Label>
          Altersgruppe
          <Select name="age" onChange={handleChange} value={place.age}>
            {ageList.map(value => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Label>
        <Headline>Foto</Headline>

        <Label>
          <CameraInput type="file" name="img" accepnt="image/*" onChange={handleImage} />
        </Label>
        {place.img && (
          <ImgWrapper>
            <Img src={place.img} />
          </ImgWrapper>
        )}

        <Headline id="card">Karte</Headline>

        {isMarkerSet && <LngWarning>Bitte setzte einen Marker!</LngWarning>}
        <MapContainer>
          <AddMarkerMap />
        </MapContainer>
        <Headline> Adresse </Headline>
        <Label>
          Straße/Hausnummer
          <Input onChange={handleChange} value={place.street} name="street" type="text" required />
        </Label>
        <Label>
          Stadt
          <Input
            onChange={handleChange}
            name="city"
            maxLength={20}
            value={place.city}
            type="text"
            required
          />
        </Label>
        <Label>
          Postleitzahl
          <Input onChange={handleChange} name="zip" value={place.zip} type="number" required />
        </Label>
        <SelectWrapper>
          <Label>
            Stadtteil
            <Select
              onChange={handleChange}
              name="quarter"
              value={place.quarter}
              type="text"
              maxLength={20}
              required
            >
              {quarterList.map(value => (
                <Option key={value} value={value}>
                  {value}
                </Option>
              ))}
            </Select>
          </Label>
        </SelectWrapper>
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

        <Button>Ort hinzufügen</Button>
      </Form>
    </Container>
  );
}
