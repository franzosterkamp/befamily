import React from 'react';
import image from '../images/places.png';
import styled from '@emotion/styled';
import { Container } from '../components/general/Container';
import { Rate } from '../components/card/Rate';

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

const Titel = styled.h3``;

const Description = styled.article`
  height: 200px;
  width: 90%;
  border: 2px solid black;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px;
  overflow: auto;
`;

const AgeWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  border-bottom: 1px black solid;
  padding: 10px 0px 10px 0;
`;

const AgeData = styled.div`
  margin: 5px;

  width: 25%;
`;

const Age = styled.div`
  justify-self: flex-end;

  width: 25%;
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
  font-size: 1rem;
  margin: 5px;
  margin-right: 10%;
  justify-self: flex-end;
`;

const AdressWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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

const CatergoryWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0px 10px 0;
`;

const Category = styled.div`
  justify-self: flex-end;
  width: 25%;
`;

const CategoryData = styled.div`
  margin: 5px;
  margin-left: 0px;
  width: 25%;
`;

export default function DetailPage() {
  return (
    <Container>
      <ImageWrapper>
        <Img src={image} />
      </ImageWrapper>
      <Titel>Spielplatz Nippes</Titel>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere voluptate, eos
        sed non aliquam illum sapiente sunt quo explicabo vero autem hic aspernatur culpa
        exercitationem numquam repudiandae expedita placeat. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Reiciendis facere voluptate, eos sed non aliquam illum sapiente sunt quo
        explicabo vero autem hic aspernatur culpa exercitationem numquam repudiandae expedita
        placeat.
      </Description>
      <AgeWrapper>
        <Age>Alter:</Age> <AgeData>0-2 Jahre</AgeData>
      </AgeWrapper>
      <CatergoryWrapper>
        <Category>Kategorie:</Category>
        <CategoryData>Spielplatz</CategoryData>
      </CatergoryWrapper>
      <AdressWrapper>
        <Adress>Adresse:</Adress>
        <AdressBox>
          <Street>Max-Starße. 1 </Street>
          <Zip>50733 </Zip>
          <City>Köln Nippes</City>
        </AdressBox>
      </AdressWrapper>
      <ButtonWrapper>
        <RateButton>Bewerten</RateButton>
        <CommentButton>Kommentar</CommentButton>
      </ButtonWrapper>
    </Container>
  );
}
