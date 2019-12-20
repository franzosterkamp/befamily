import styled from '@emotion/styled';

const Badege = styled.span`
  height: fit-content;
  width: fit-content;
  font-size: 0.6rem;
  background-color: ${props => props.theme.colors.primary};
  padding: 5px;
  border-radius: 10px;
  margin: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export default Badege;
