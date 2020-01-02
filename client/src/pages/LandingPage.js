import React from 'react';
import styled from '@emotion/styled';
import FamilyIcon from '../icons/Family';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 10%;
`;

const Headline = styled.h2`
  margin-top: 10%;
  font-size: 1.5rem;
`;

const StartButton = styled(Link)`
  width: fit-content;
  text-decoration: none;
  text-align: center;
  margin-top: 10%;
  height: fit-content;
  border-radius: 7px;
  padding: 10px;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
`;

const InfoButton = styled.button`
  outline: none;
  border: none;
  margin-top: 10%;
  width: 30px;
  height: 30px;
  padding: auto;
  border-radius: 50%;
  background-color: ${props =>
    props.isClicked ? props.theme.colors.primary : props.theme.colors.special};
`;

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
        <HighlightRate>fami</HighlightRate>
        <HighlightSecondary>ly</HighlightSecondary>
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
