import React from 'react';
import styled from '@emotion/styled';
import FamilyIcon from '../icons/Family';
import { Container } from '../components/general/Container';
import { Headline } from '../components/general/Headline';

const InfoBox = styled.article`
  width: 70%;
  height: 40%;
  margin-top: 40px;
  width: 80%;
  max-width: 300px;
  margin: 0 auto 0 auto;
  text-align: justify;
`;

const ThanksHeadline = styled.h2`
  margin-top: 40px;
`;

const HighlightSpecial = styled.span`
  color: ${props => props.theme.colors.special};
`;

const HighlightSecondary = styled.span`
  color: ${props => props.theme.colors.secondary};
`;

const HighlightRate = styled.span`
  color: ${props => props.theme.colors.rate};
`;

export default function InfoPage() {
  return (
    <Container>
      <FamilyIcon />
      <Headline>
        <HighlightSpecial>be</HighlightSpecial>
        <HighlightRate>fam</HighlightRate>
        <HighlightSecondary>ily</HighlightSecondary>
      </Headline>

      <ThanksHeadline>Vielen Dank für deinen Eintrag!</ThanksHeadline>
      <InfoBox>
        Dein kinderfreundlicher Ort wurde jetzt eingetragen. Andere Besucher können den Ort jetzt
        einsehen und bewerten!
      </InfoBox>
    </Container>
  );
}
