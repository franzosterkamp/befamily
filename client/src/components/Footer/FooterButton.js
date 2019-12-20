import styled from './node_modules/@emotion/styled';

const FooterButton = styled.button`
  color: ${props => props.theme.colors.text};
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
