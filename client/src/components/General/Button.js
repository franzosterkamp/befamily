import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  min-width: 20px;
  min-height: 10px;
  height: fit-content;
  width: fit-content;
  background-color: ${props => props.theme.colors.rate};
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  outline: none;
  font-size: 0.8rem;
  font-weight: bold;
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
