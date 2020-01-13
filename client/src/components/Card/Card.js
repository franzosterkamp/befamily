import React from 'react';
import { BadgeAge, BadgeQuarter, Badge } from './Badge';
import Rate from './Rate';
import styled from '@emotion/styled';
import CardLink from './CardButton';
import Image from './CardImage';

const ImageWrapper = styled.div`
  width: 100%;
  height: 45%;
  margin-right: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 80%;
  max-width: 250px;
  margin: auto;
  height: 290px;
  display: flex;
  flex-flow: column;
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
  align-self: flex-start;
  padding: 0px;
  margin-left: 20px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto 2% auto;
  padding: 2% 0px 2% 0px;
  flex-wrap: wrap;
  height: 50px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.primary};
`;

export default function Card({ name, age, rate, quarter, img, id, category }) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <Title>{name}</Title>

      <ContentWrapper>
        <BadgeWrapper>
          <BadgeAge>{age}</BadgeAge>
          <BadgeQuarter>{quarter}</BadgeQuarter>
          <Badge>{category}</Badge>
        </BadgeWrapper>
        <Rate rate={rate} />
        <LinkWrapper>
          <CardLink to={`/${id}`}>Mehr</CardLink>
        </LinkWrapper>
      </ContentWrapper>
    </Container>
  );
}
