import React from 'react';
import image from '../images/places.png';
import { DetailContainer } from '../components/general/Container';
import useGetFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Titel } from '../components/general/Headline';
import DetailRate from '../components/general/DetailRate';
import {
  ImageWrapper,
  Wrapper,
  AdressWrapper,
  ButtonWrapper,
  AdressBox
} from '../components/general/Wrapper';
import { CommentButton, RateButton } from '../components/general/Button';
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
  const id = useParams();
  console.log(id.placeId);

  const place = useGetFetch(`/api/places/${id.placeId}`);

  return (
    <DetailContainer>
      <ImageWrapper>
        <Img src={image} />
      </ImageWrapper>
      <Titel>{place.name}</Titel>
      <Description>{place.detail}</Description>
      <Wrapper>
        <Parameter>Bewertung:</Parameter> <DetailRate rate={place.rate} />
      </Wrapper>
      <Wrapper>
        <Parameter>Alter:</Parameter> <Data>{place.age}</Data>
      </Wrapper>
      <Wrapper>
        <Parameter>Kategorie:</Parameter>
        <Data>{place.category}</Data>
      </Wrapper>
      <Wrapper>
        <Parameter>Webseite:</Parameter> <Data>{place.web}</Data>
      </Wrapper>
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
      <ButtonWrapper>
        <RateButton>Bewerten</RateButton>
        <CommentButton>Kommentar</CommentButton>
      </ButtonWrapper>
    </DetailContainer>
  );
}
