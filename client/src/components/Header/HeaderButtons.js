import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MapButton = styled(Link)`
  text-align: center;
  width: 52%;
  height: 100%;
  text-transform: uppercase;
  border-bottom: solid 3px
    ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.prmiary};
  fill: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
`;

export const ListButton = styled(Link)`
  fill: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  text-align: center;
  width: 52%;
  height: 100%;
  text-transform: uppercase;
  border-bottom: solid 3px
    ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  font-weight: bold;
  outline: none;
  font-size: 1rem;
  text-decoration: none;
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.prmiary};
`;
