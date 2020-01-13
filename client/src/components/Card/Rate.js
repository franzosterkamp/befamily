import styled from '@emotion/styled';
import React from 'react';
import Ball from '../../icons/Ball';
import { RateContainer } from '../general/Container';

const RateTitle = styled.span`
  font-size: 0.7rem;
  margin-left: 10px;
  font-weight: bold;
  font-style: italic;
`;

const RateNumber = styled(RateTitle)`
  margin-left: -3px;
`;
const NormalBall = styled(Ball)`
  width: 1.3rem;
  height: 1.3rem;
  fill: ${props => props.theme.colors.norate};
`;

const YellowBall = styled(Ball)`
  fill: ${props => props.theme.colors.rate};
  width: 1.3rem;
  height: 1.3rem;
`;

export default function Rate({ rate }) {
  const balls = [];
  function Rating(rate) {
    const intRate = Math.round(rate);
    let count = 0;
    while (count < intRate) {
      balls.push(<YellowBall key={count} />);
      count++;
    }
    while (count < 5) {
      balls.push(<NormalBall key={count} />);
      count++;
    }
    return balls;
  }

  return (
    <RateContainer>
      <RateTitle>Bewertung: </RateTitle>
      <RateNumber>{rate}</RateNumber>
      {Rating(rate)}
    </RateContainer>
  );
}
