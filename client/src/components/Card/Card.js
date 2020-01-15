import React from 'react';
import { BadgeAge, BadgeQuarter, Badge } from './Badge';
import { BadgeWrapper, ContentWrapper, LinkWrapper, CardImageWrapper } from '../General/Wrapper';
import Rate from './Rate';
import CardLink from './CardButton';
import Image from './CardImage';
import PropTypes from 'prop-types';
import { CardContainer } from '../General/Container';
import { CardTitle } from '../General/Headline';


export default function Card({ name, age, rate, quarter, img, id, category }) {
  return (
    <CardContainer>
      <CardImageWrapper>
        <Image src={img} />
      </CardImageWrapper>
      <CardTitle>{name}</CardTitle>

      <ContentWrapper>
        <BadgeWrapper>
          <BadgeAge>{age}</BadgeAge>
          <BadgeQuarter>{quarter}</BadgeQuarter>
          <Badge>{category}</Badge>
        </BadgeWrapper>
        <Rate rate={rate} />
        <LinkWrapper>
          <CardLink to={`/places/${id}`}>Mehr</CardLink>
        </LinkWrapper>
      </ContentWrapper>
    </CardContainer>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  rate: PropTypes.string,
  quarter: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string
};
