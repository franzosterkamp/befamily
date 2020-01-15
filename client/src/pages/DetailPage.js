import React from 'react';
import { DetailContainer, RateDetailContainer } from '../components/general/Container';
import { RateInput } from '../components/general/Input';
import { useParams } from 'react-router-dom';
import { Titel } from '../components/general/Headline';
import DetailRate from '../components/general/DetailRate';
import {
  ImageWrapper,
  RateWrapper,
  Wrapper,
  AdressWrapper,
  ButtonWrapper,
  AdressBox
} from '../components/general/Wrapper';
import { RateButton, CancelButton, SubmitButton } from '../components/general/Button';
import {
  Img,
  Description,
  Adress,
  Street,
  Zip,
  City,
  Parameter,
  Data
} from '../components/general/Output';

export default function DetailPage() {
  // eslint-disable-next-line
  const [id, setId] = React.useState(useParams().placeId);
  const [newRate, setNewRate] = React.useState(0);
  const [isRateUpdated, SetisRateUpdated] = React.useState(0);
  const [rateClicked, setRateClicked] = React.useState(false);
  const [place, setPlace] = React.useState([]);

  React.useEffect(() => {
    async function doFetch() {
      const response = await fetch(`/api/places/${id}`);
      const newPlaces = await response.json();
      setPlace(newPlaces);
    }
    doFetch();
    // eslint-disable-next-line
  }, [isRateUpdated]);

  async function handleSubmit() {
    setRateClicked(!rateClicked);
    SetisRateUpdated(!isRateUpdated);

    await fetch(`/api/places/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newRate })
    });
  }

  function handleCancel() {
    setRateClicked(!rateClicked);
    setNewRate(0);
  }

  return (
    <DetailContainer>
      <ImageWrapper>
        <Img src={place.img} />
      </ImageWrapper>
      <Titel>{place.name}</Titel>
      <Description>{place.detail}</Description>
      <RateWrapper>
        <Parameter>Bewertung:</Parameter> <DetailRate rate={place.rate} />
      </RateWrapper>
      <Wrapper>
        <Parameter>Alter:</Parameter> <Data>{place.age}</Data>
      </Wrapper>
      <Wrapper>
        <Parameter>Kategorie:</Parameter>
        <Data>{place.category}</Data>
      </Wrapper>
      {place.web && (
        <Wrapper>
          <Parameter>Webseite:</Parameter> <Data>{place.web}</Data>
        </Wrapper>
      )}
      <AdressWrapper>
        <Adress>Adresse:</Adress>
        <AdressBox>
          <Street>{place.street}</Street>
          <Zip>{place.zip}</Zip>
          <City>
            {place.city} {place.quarter}
          </City>
        </AdressBox>
      </AdressWrapper>
      <ButtonWrapper rateClicked={rateClicked}>
        <RateButton onClick={() => setRateClicked(!rateClicked)}>Bewerten</RateButton>
      </ButtonWrapper>
      <RateDetailContainer rateClicked={rateClicked}>
        {[1, 2, 3, 4, 5].map(value => (
          <RateInput
            key={value}
            type="button"
            value={value}
            active={value === newRate}
            onClick={() => setNewRate(value)}
          />
        ))}
        <ButtonWrapper>
          <SubmitButton onClick={handleSubmit}>Bewerten</SubmitButton>
          <CancelButton onClick={handleCancel}>Abbrechen</CancelButton>
        </ButtonWrapper>
      </RateDetailContainer>
    </DetailContainer>
  );
}
