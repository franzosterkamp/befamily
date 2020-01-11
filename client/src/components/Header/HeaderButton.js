import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  text-align: center;
  width: 40%;
  height: 75%;
  text-transform: uppercase;
  border-radius: 7px;
  border: solid 2px
    ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  outline: none;
  font-size: 0.7rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.1rem;
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.prmiary};
  fill: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
`;
