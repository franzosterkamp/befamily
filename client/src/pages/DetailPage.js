import React from 'react';
import image from '../images/places.png';
import { DetailContainer, RateContainer } from '../components/general/Container';
import { RateInput } from '../components/general/Input';
import useGetFetch, { handleSubmit } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Titel } from '../components/general/Headline';
import styled from '@emotion/styled';
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

const CommentsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 90%;
  border-top: black solid 1px;
`;

const CommentHeadline = styled.div`
  justify-self: center;
  text-align: start;
  width: 90%;
  padding: 10px;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`;

const CommentCreator = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  text-align: start;
  margin: 10px;
  margin-bottom: 3px;
`;

const CommentText = styled.article`
  width: 80%;
  height: fit-content;
  max-height: 200px;
  overflow: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
`;

const RateDetailContainer = styled(RateContainer)`
  display: ${props => (props.rateClicked ? 'block' : 'none')};
  margin: 30px;
  height: fit-content;
`;

const SubmitButton = styled(RateButton)`
  width: fit-content;
  font-size: 0.85rem;

  font-style: bold;
  height: 30px;
`;

const CancelButton = styled(CommentButton)`
  width: fit-content;
  font-style: bold;
  font-size: 0.85rem;
  height: 30px;
`;

export default function DetailPage() {
  const id = useParams();

  const place = useGetFetch(`/api/places/${id.placeId}`);

  const [newRate, setNewRate] = React.useState(0);
  const [rateClicked, setRateClicked] = React.useState(false);

  async function handleSubmit() {
    setRateClicked(!rateClicked);

    await fetch(`/api/places/${id.placeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newRate })
    });
  }

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
      <ButtonWrapper rateClicked={rateClicked}>
        <RateButton onClick={() => setRateClicked(!rateClicked)}>Bewerten</RateButton>
        <CommentButton>Kommentar</CommentButton>
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
          <CancelButton onClick={() => setRateClicked(!rateClicked)}>Abbrechen</CancelButton>
        </ButtonWrapper>
      </RateDetailContainer>
      <CommentsContainer>
        <CommentHeadline>Kommentare</CommentHeadline>
        <CommentCreator>Peter:</CommentCreator>
        <CommentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur inventore ex illo
          sint illum, incidunt unde delectus neque sit nihil dicta molestias deleniti odio assumenda
          magni. Minima quo asperiores illo?
        </CommentText>
      </CommentsContainer>
    </DetailContainer>
  );
}
