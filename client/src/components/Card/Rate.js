import styled from '@emotion/styled';
import React from 'react';
import Ball from '../../icons/Ball';
import { RateContainer } from '../general/Container';

const P = styled.p`
  font-size: 0.8rem;
  margin-right: 5px;
  font-weight: bold;
  font-style: italic;
`;

const NormalBall = styled(Ball)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${props => props.theme.colors.norate};
`;

const YellowBall = styled(Ball)`
  fill: ${props => props.theme.colors.rate};
  width: 1.5rem;
  height: 1.5rem;
`;

export default function Rate({ rate }) {
  const balls = [];

  function Rating(rate) {
    const intRate = parseFloat(rate);
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
      <P>Bewertung: </P>
      <P>{rate}</P>
      {Rating(rate)}
    </RateContainer>
  );
}
