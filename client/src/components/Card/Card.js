import React from 'react';
import Badge from './Badge';
import Image from './CardImage';
import Rate from './Rate';
import styled from '@emotion/styled';
import image from '../../images/places.png';
import CardLink from './CardButton';

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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
  margin-top: 15px;
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

export default function Card({ name, age, rate, quarter, img, id }) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image}></Image>
      </ImageWrapper>
      <ContentWrapper>
        <Title>{name}</Title>
        <Rate rate={rate} />
        <BadgeWrapper>
          <Badge>{age}</Badge>
          <Badge>{quarter}</Badge>
          <Badge>2 km</Badge>
        </BadgeWrapper>
        <CardLink to={`/${id}`}>mehr</CardLink>
      </ContentWrapper>
    </Container>
  );
}
