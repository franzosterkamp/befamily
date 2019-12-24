import styled from '@emotion/styled';
import React from 'react';
import Ball from '../../icons/Ball';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  align-content: top;
`;

const P = styled.p`
  font-size: 0.8rem;
  margin-right: 5px;
  font-weight: bold;
  font-style: italic;
`;

const NormalBall = styled(Ball)`
  width: 1.5rem;
  height: 1.5rem;
`;

const YellowBall = styled(Ball)`
  fill: ${props => props.theme.colors.rate};
  width: 1.5rem;
  height: 1.5rem;
`;

export default function Rate({ rate }) {
  const balls = [];

  function Rating(rate) {
    const intRate = parseInt(rate);
    console.log(intRate);
    let count = 0;
    while (count < intRate) {
      balls.push(<YellowBall key={count} />);
      count++;
    }
    while (count < 5) {
      balls.push(<NormalBall key={count} />);
      count++;
      console.log(balls);
    }
    return balls;
  }

  return (
    <Container>
      <P>Bewertung: </P>
      <P>{rate}</P>
      {Rating(rate)}
    </Container>
  );
}
