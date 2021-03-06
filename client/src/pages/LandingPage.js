import React from 'react';
import styled from '@emotion/styled';
import FamilyIcon from '../icons/Family';
import { StartButton, InfoButton } from '../components/general/Button';
import { Container } from '../components/general/Container';
import { Headline } from '../components/general/Headline';

const InfoBox = styled.article`
  margin-top: 20px;
  width: 65%;
  height: 30%;
  text-align: justify;
`;

const LandingContainer = styled(Container)`
  margin-top: 70px;
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

export default function Landingpage() {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <LandingContainer>
      <FamilyIcon />
      <Headline>
        <HighlightSpecial>be</HighlightSpecial>
        <HighlightRate>fam</HighlightRate>
        <HighlightSecondary>ily</HighlightSecondary>
      </Headline>
      <StartButton to="/card">Los gehts!</StartButton>
      <InfoButton onClick={() => setIsClicked(!isClicked)} isClicked={isClicked}>
        ?
      </InfoButton>
      {isClicked && (
        <InfoBox>
          Die befamily Webseite möchte Eltern helfen einfach und schnell den geeigneten Ort für Ihre
          Kinder im Großraum Köln zu finden.
        </InfoBox>
      )}
    </LandingContainer>
  );
}
