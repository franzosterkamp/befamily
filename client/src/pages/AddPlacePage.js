import React from 'react';
import Input from '../components/General/Input';
import TextArea from '../components/General/TextInput';
import { Button } from '../components/General/Button';
import { Label } from '../components/General/Label';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import AddMarkerMap from '../components/map/AddMarkerMap';
import {
  AddPlaceContainer as Container,
  MapContainer,
  RateContainer
} from '../components/General/Container';
import { CameraInput } from '../components/General/Input';
import { AddPlaceHeadline as Headline } from '../components/General/Headline';
import { RateInput, Form } from '../components/General/Input';
import { ImgWrapper, SelectWrapper } from '../components/General/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { Option, Select } from '../components/General/SelectBox';
import PropTypes from 'prop-types';

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const MarkerInfo = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  height: fit-content;
`;

const SubmitButton = styled(Button)`
  margin-bottom: 60px;
  margin-top: 40px;
  font-size: 1rem;
`;

const AdressButton = styled(SubmitButton)`
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 0.7rem;
  height: 30px;
`;
export default function AddPlacePage({ getUpdate }) {
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
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var url = response.secure_url;
        setPlace({ ...place, img: url });
      }
    };
  }

  React.useEffect(() => {
    sessionStorage.removeItem('markerLng');
    sessionStorage.removeItem('markerLat');
  }, []);

  async function reserveGeoCode() {
    if (sessionStorage.getItem('markerLng')) {
      const lng = JSON.parse(sessionStorage.getItem('markerLng'));
      const lat = JSON.parse(sessionStorage.getItem('markerLat'));
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=fb9976cece424343a9c1f53332148dac`
      );
      const fetchedResults = await response.json();
      const adressComponents = fetchedResults.results[0].components;

      setPlace({
        ...place,
        street: adressComponents.road + ' ' + adressComponents.house_number,
        zip: adressComponents.postcode,
        city: adressComponents.city
      });

      if (adressComponents.house_number === undefined) {
        setPlace({ ...place, street: adressComponents.road });
      }
    }
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
      getUpdate(place);
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
        <MarkerInfo>Bitte setzte einen Marker</MarkerInfo>
        <MapContainer>
          <AddMarkerMap />
        </MapContainer>
        <Headline>Katergorie und Altergruppe</Headline>
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
          Altersgruppe
          <Select name="age" onChange={handleChange} value={place.age}>
            {ageList.map(value => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Label>
        <Headline> Adresse </Headline>
        <AdressButton type="button" onClick={reserveGeoCode}>
          Adresse generieren
        </AdressButton>
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
        <SubmitButton>Ort hinzufügen</SubmitButton>
      </Form>
    </Container>
  );
}

AddPlacePage.propTypes = {
  getUpdate: PropTypes.func
};
