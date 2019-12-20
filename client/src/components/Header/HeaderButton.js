import styled from './node_modules/@emotion/styled';

const HeaderButton = styled.button`
  color: ${props => props.theme.colors.text};
  text-align: center;
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  font-size: 14px;
`;

export default HeaderButton;
