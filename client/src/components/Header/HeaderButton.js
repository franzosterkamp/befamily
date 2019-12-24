import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MapButton = styled(Link)`
  text-align: center;
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  border: none;
  outline: none;
  font-size: 14px;
  text-decoration: none;
  border-right: 2px ${props => props.theme.colors.text} solid;
  color: ${props => props.theme.colors.text};
  background-color: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.prmiary};
`;

export const ListButton = styled(Link)`
  text-align: center;
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  border: none;
  outline: none;
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  background-color: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.prmiary};
`;
