import React from 'react';
import Input from '../components/General/Input';
import TextArea from '../components/General/TextInput';
import { AddSubmitButton as SubmitButton } from '../components/General/Button';
import { Label, SubmitButtonLabel, CameraLabel } from '../components/General/Label';
import { useHistory } from 'react-router-dom';
import Camera from '../icons/Camera';
import AddMarkerMap from '../components/map/AddMarkerMap';
import {
  AddPlaceContainer as Container,
  MapContainer,
  RateContainer,
  MarkerAlert
} from '../components/General/Container';
import { CameraInput } from '../components/General/Input';
import { AddPlaceHeadline as Headline } from '../components/General/Headline';
import { RateInput, Form } from '../components/General/Input';
import { ImgWrapper, MarkerSuccessWrapper } from '../components/General/Wrapper';
import { quarterList, ageList, categoryList } from '../components/data/array';
import { Option, Select } from '../components/General/SelectBox';
import Check from '../icons/Check';
import PropTypes from 'prop-types';
import Marker from '../icons/Marker';
import uploadImage from '../hooks/updloadImage';
import { Loading } from '../components/General/Animation';
import { AddImg as Img } from '../components/General/Output';

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
    // eslint-disable-next-line
  }, [markerPos]);

  async function reserveGeoCode(markerPos) {
    const [lat, lng] = markerPos;
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${process.env.REACT_APP_GEOKEY}`
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
        <CameraLabel htmlFor="file">
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
