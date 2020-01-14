import styled from '@emotion/styled';

const TextInput = styled.textarea`
  font-size: 0.8rem;
  font-style: bold;
  padding-left: 10px;
  padding-top: 10px;
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
