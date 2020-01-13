import React from 'react';
import styled from '@emotion/styled';
import FamilyIcon from '../icons/Family';
import { StartButton, InfoButton } from '../components/General/Button';
import { Container } from '../components/General/Container';
import { Headline } from '../components/General/Headline';

const InfoBox = styled.article`
  width: 90%;
  height: 30%;
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
    <Container>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ab quis tempore nostrum
          mollitia repellendus doloremque quasi minima at iste, quos eos vero numquam inventore! Eos
          iste repellat aliquid a.
        </InfoBox>
      )}
    </Container>
  );
}
