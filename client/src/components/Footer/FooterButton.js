import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterButton = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  text-align: center;
  width: 33%;
  height: 100%;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  font-size: 12px;
`;

export default FooterButton;
