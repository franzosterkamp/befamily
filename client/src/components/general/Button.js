import styled from './node_modules/@emotion/styled';

const Button = styled.button`
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

export default Button;
