import styled from '@emotion/styled';

const CardButton = styled.button`
  height: fit-content;
  width: fit-content;
  background-color: ${props => props.theme.colors.special};
  border-radius: 5px;
  padding: 2px 10px;
  margin-top: 8px;
  align-self: flex-end;
  margin-right: 2%;
  outline: none;
`;

export default CardButton;
