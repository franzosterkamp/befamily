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
  fill: #ffd626;
  width: 1.5rem;
  height: 1.5rem;
`;

export default function Rate() {
  return (
    <Container>
      <P>Bewertung: </P>
      <P>4,2</P>
      <YellowBall />
      <YellowBall />
      <YellowBall />
      <YellowBall />
      <NormalBall />
    </Container>
  );
}
