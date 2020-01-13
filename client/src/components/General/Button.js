import styled from './node_modules/@emotion/styled';
import { Link } from './node_modules/react-router-dom';

export const Button = styled.button`
  min-width: 20px;
  min-height: 10px;
  height: fit-content;
  width: fit-content;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  letter-spacing: 1px;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  outline: none;
  border: none;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const UnsetButton = styled(Button)`
  background: ${props => props.theme.colors.secondary};
  width: 30%;
`;

export const StartButton = styled(Link)`
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

export const InfoButton = styled.button`
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

export const MapButton = styled.button`
  z-index: 1;
  margin: 4px;
  margin-top: 5px;
  border: none;
  outline: none;
  padding: 0px;
  border-radius: 5px;
  position: absolute;
  background-color: transparent;
  fill: ${props =>
    props.mapStyle === 'mapbox://styles/mapbox/streets-v11'
      ? props => props.theme.colors.extra
      : props => props.theme.colors.background};
`;

export const RateButton = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-style: bold;
  background-color: ${props => props.theme.colors.rate};
`;

export const CommentButton = styled(RateButton)`
  background-color: ${props => props.theme.colors.secondary};
`;

export const SubmitButton = styled(RateButton)`
  width: fit-content;
  ${props => props.theme.colors.extra};
  font-size: 0.85rem;
  height: 30px;
`;

export const CancelButton = styled(CommentButton)`
  width: fit-content;
  font-size: 0.85rem;
  height: 30px;
`;
