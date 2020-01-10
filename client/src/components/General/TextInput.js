import styled from '@emotion/styled';

const TextInput = styled.textarea`
  font-size: 1rem;
  font-style: bold;
  resize: none;
  border-radius: 10px;
  width: 120%;
  outline: none;
  border: 1px solid ${props => props.theme.colors.primary};
`;

export default TextInput;
