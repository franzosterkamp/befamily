import React from 'react';
import image from '../images/places.png';
import styled from '@emotion/styled';
import { DetailContainer } from '../components/general/Container';
import useGetFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const Img = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

const Titel = styled.span`
  width: 90%;
  padding: 10px;
  font-size: 1.3rem;
  text-align: center;
  /* border-bottom: 1px black solid; */
`;

const Description = styled.article`
  height: 200px;
  width: 90%;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px;
  overflow: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  padding: 10px 0px 10px 0;
`;

const Parameter = styled.div`
  margin: 5px;
  width: 150px;
`;

const Data = styled.div`
  margin: 5px;
`;

const RateButton = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.rate};
`;

const CommentButton = styled(RateButton)`
  background-color: ${props => props.theme.colors.secondary};
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Adress = styled.span`
  width: 150px;

  margin: 5px;
  font-size: 1rem;
`;

const AdressWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px;
  width: 90%;
  border-bottom: 1px black solid;
  border-top: 1px black solid;
  padding: 10px 0px 10px 0;
`;

const AdressBox = styled.div`
  display: flex;
  flex-flow: column;
`;
const Street = styled.span`
  margin: 5px;
`;

const Zip = styled.span`
  margin: 5px;
`;

const City = styled.span`
  margin: 5px;
`;

export default function DetailPage() {
  const id = useParams();
  const place = useGetFetch(`api/places/${id.placeId}`);

  return (
    <DetailContainer>
      <ImageWrapper>
        <Img src={image} />
      </ImageWrapper>
      <Titel>{place.name}</Titel>
      <Description>{place.detail}</Description>
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
          <Street>{place.street} </Street>
          <Zip>{place.zip} </Zip>
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
