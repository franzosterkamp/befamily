import React from 'react';
import { CardContainer } from '../general/Container';
import Family from '../../icons/Family';
import styled from '@emotion/styled';
import { Headline } from '../general/Headline';

const NoResultFamily = styled(Family)`
  width: 85px;
  height: 85px;
  margin: 20% auto;
`;

const NoResultHealdine = styled(Headline)`
  font-size: 0.9rem;
  margin: 0 auto;
`;

export default function NoResultCard() {
  return (
    <CardContainer>
      <NoResultFamily />
      <NoResultHealdine>Kein Ergebnis!</NoResultHealdine>
    </CardContainer>
  );
}
