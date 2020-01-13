import styled from './node_modules/@emotion/styled';

const TextInput = styled.textarea`
  font-size: 0.7rem;
  font-style: bold;
  resize: none;
  border-radius: 10px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  outline: none;
  border: 1px solid ${props => props.theme.colors.primary};
  &:focus {
    border: 1px solid ${props => props.theme.colors.extra};
  }
`;

export default TextInput;
