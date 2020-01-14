import React from 'react';
import Input from '../components/General/Input';
import TextArea from '../components/General/TextInput';
import { Button } from '../components/General/Button';
import { Label } from '../components/General/Label';
import { useHistory } from 'react-router-dom';
import Camera from '../icons/Camera';
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
import { ImgWrapper } from '../components/General/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { Option, Select } from '../components/General/SelectBox';
import Check from '../icons/Check';
import PropTypes from 'prop-types';
import Marker from '../icons/Marker';
import { fadeIn, loading } from '../components/General/Animation';
import uploadImage from '../hooks/updloadImage';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fit;
  object-position: top;
  border-radius: 8px;
`;

const MarkerAlert = styled.div`
  width: fit-content;
  margin: 0px auto 5px auto;
  height: 40px;
  padding: 5px;
  text-align: center;
  height: fit-content;
  border-radius: 8px;
  font-size: 0.9rem;
`;

const MarkerSuccessWrapper = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  padding: 2px;
  border-radius: 8px;
  margin: 0 auto 0 auto 0;
  line-height: 30px;
  animation: ${fadeIn} 1s ease-in;
  height: fit-content;
`;

const SubmitButton = styled(Button)`
  width: 50%;
  margin-top: 20px;
  height: 35px;
  font-size: 0.8rem;
`;

const ButtonLabel = styled(Label)`
  text-align: center;
  margin-top: 5px;
  height: 50px;
  width: 100%;
`;

const SubmitButtonLabel = styled(ButtonLabel)`
  margin-bottom: 50px;
`;

const Loading = styled.div`
  display: inline-block;
  margin: 10px auto 0px auto;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 60px;
    height: 60px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${props => props.theme.colors.extra} transparent
      ${props => props.theme.colors.extra} transparent;
    animation: ${loading} 1.2s linear infinite;
  }
`;

const CameraLabel = styled(Label)`
  display: inline-block;
  margin-top: 0px;
  background-color: ${props => props.theme.colors.secondary};
  width: 60px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function AddPlacePage({ onAddPlace }) {
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
    lng: 0,
    lat: 0
  });
  const [markerPos, setMarkerPos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  async function handleImage(event) {
    setLoading(true);
    const url = await uploadImage(event.target.files[0]);
    setLoading(false);
    setPlace({ ...place, img: url });
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (markerPos) {
        reserveGeoCode(markerPos);
      }
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [markerPos]);

  async function reserveGeoCode(markerPos) {
    const [lat, lng] = markerPos;
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=fb9976cece424343a9c1f53332148dac`
    );
    const fetchedResults = await response.json();
    const adressComponents = fetchedResults.results[0].components;

    if (adressComponents.house_number === undefined) {
      setPlace({
        ...place,
        street: adressComponents.road,
        zip: adressComponents.postcode,
        city: adressComponents.city,
        lng: markerPos[1],
        lat: markerPos[0]
      });
    } else {
      setPlace({
        ...place,
        street: adressComponents.road + ' ' + adressComponents.house_number,
        zip: adressComponents.postcode,
        city: adressComponents.city,
        lng: markerPos[1],
        lat: markerPos[0]
      });
    }
  }

  function handleChange(event) {
    setPlace({
      ...place,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!markerPos) {
      window.location = '/add/#card';
      return;
    } else {
      await fetch('/api/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
      });

      history.push('/info');

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
      onAddPlace(place);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Headline>Neuen Ort eintragen</Headline>
        <Label>
          Name des Ortes
          <Input
            type="text"
            maxLength="23"
            name="name"
            required
            value={place.name}
            onChange={handleChange}
          />
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
        <Headline>Katergorie und Altersgruppe</Headline>
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
        <Headline>Foto</Headline>
        <CameraLabel for="file">
          <Camera />
        </CameraLabel>
        <CameraInput type="file" name="img" id="file" accepnt="image/*" onChange={handleImage} />
        {loading && <Loading></Loading>}
        {place.img && (
          <ImgWrapper>
            <Img src={place.img} />
          </ImgWrapper>
        )}
        <Headline id="card">Karte</Headline>
        {!markerPos && <MarkerAlert>Bitte setzte einen Marker</MarkerAlert>}
        <MapContainer>
          <AddMarkerMap
            onMarkerSet={(lat, lng) => {
              setMarkerPos([lat, lng]);
            }}
          />
        </MapContainer>
        {markerPos && (
          <MarkerSuccessWrapper>
            <Marker />
            <Check />
          </MarkerSuccessWrapper>
        )}
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
        <SubmitButtonLabel>
          <SubmitButton>Ort hinzufügen</SubmitButton>
        </SubmitButtonLabel>
      </Form>
    </Container>
  );
}

AddPlacePage.propTypes = {
  onAddPlace: PropTypes.func
};
