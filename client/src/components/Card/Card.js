import React from 'react';
import { BadgeAge, BadgeQuarter, Badge } from './Badge';
import Rate from './Rate';
import styled from '@emotion/styled';
import CardLink from './CardButton';
import Image from './CardImage';

const ImageWrapper = styled.div`
  width: 35%;
  margin-right: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 93%;
  max-width: 360px;
  margin: auto;
  height: 150px;
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
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 4px;
`;

export default function Card({ name, age, rate, quarter, img, id, category }) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{name}</Title>
        <Rate rate={rate} />
        <BadgeWrapper>
          <BadgeAge>{age}</BadgeAge>
          <BadgeQuarter>{quarter}</BadgeQuarter>
          <Badge>{category}</Badge>
        </BadgeWrapper>
        <CardLink to={`/${id}`}>mehr</CardLink>
      </ContentWrapper>
    </Container>
  );
}
