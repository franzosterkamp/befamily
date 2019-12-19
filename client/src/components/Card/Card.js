import React from 'react';
import Badge from './Badge';
import Image from './CardImage';
import Rate from './Rate';
import styled from '@emotion/styled';
import playplace from '../../assets/Images/Spielplatz.png';
import CardButton from './CardButton';

const ImageWrapper = styled.div`
  width: 35%;
  margin-right: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  margin-top: 30%;
  width: 90%;
  max-width: 360px;
  margin: auto;
  height: 160px;
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-content: space-around;
`;

const Title = styled.p`
  padding: 0px;
  font-size: 1rem;
  font-weight: bold;
`;

const BadgeWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Card() {
  return (
    <Container>
      <ImageWrapper>
        <Image src={playplace}></Image>
      </ImageWrapper>
      <ContentWrapper>
        <Title>Spielplatz Breitestraße</Title>
        <Rate />
        <BadgeWrapper>
          <Badge>ab 0 Jahre</Badge>
          <Badge>Ehrenfeld</Badge>
          <Badge>2 km</Badge>
        </BadgeWrapper>
        <CardButton>mehr</CardButton>
      </ContentWrapper>
    </Container>
  );
}
