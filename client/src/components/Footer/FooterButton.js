import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.1rem;
  width: 33.3%;
  height: 100%;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  fill: ${props => props.theme.colors.text};
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.primary};
  font-size: 0.8rem;
`;

export const FilterButton = styled(FooterButton)`
  border-left: 2px solid ${props => props.theme.colors.background};
  border-right: 2px solid ${props => props.theme.colors.background};
`;

export const MenuButton = styled(FooterButton)`
  background-color: ${props =>
    props.menuClick ? props => props.theme.colors.text : props => props.theme.colors.primary};
  color: ${props =>
    props.menuClick ? props => props.theme.colors.primary : props => props.theme.colors.text};
  fill: ${props =>
    props.menuClick ? props => props.theme.colors.primary : props => props.theme.colors.text};
`;
