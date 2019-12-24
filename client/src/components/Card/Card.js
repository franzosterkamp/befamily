import React from 'react';
import Badge from './Badge';
import Image from './CardImage';
import Rate from './Rate';
import styled from '@emotion/styled';
import playplace from '../../assets/images/Spielplatz.png';
import CardButton from './CardButton';

const ImageWrapper = styled.div`
  width: 35%;
  margin-right: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 90%;
  max-width: 360px;
  margin: auto;
  height: 140px;
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
  margin-top: 5px;
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
  margin-top: 8px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export default function Card({ name, age, rate, quarter }) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={playplace}></Image>
      </ImageWrapper>
      <ContentWrapper>
        <Title>{name}</Title>
        <Rate rate={rate} />
        <BadgeWrapper>
          <Badge>{age}</Badge>
          <Badge>{quarter}</Badge>
          <Badge>2 km</Badge>
        </BadgeWrapper>
        <CardButton>mehr</CardButton>
      </ContentWrapper>
    </Container>
  );
}
