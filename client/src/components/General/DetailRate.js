import styled from '@emotion/styled';
import React from 'react';
import Ball from '../../icons/Ball';
import { RateContainer } from './Container';

const P = styled.p`
  font-size: 1rem;
  margin-right: 10px;
  font-weight: bold;
  font-style: italic;
`;

const NormalBall = styled(Ball)`
  width: 1.7rem;
  height: 1.7rem;
  fill: ${props => props.theme.colors.norate};
`;

const YellowBall = styled(Ball)`
  fill: ${props => props.theme.colors.rate};
  width: 1.7rem;
  height: 1.7rem;
`;

export default function DetailRate({ rate }) {
  const balls = [];

  function Rating(rate) {
    const intRate = parseInt(rate);
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
      <P>({rate})</P>
      {Rating(rate)}
    </RateContainer>
  );
}
