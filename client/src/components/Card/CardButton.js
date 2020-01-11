import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
  height: fit-content;
  width: fit-content;
  color: white;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  padding: 2px 5px;
  margin-top: 1px;
  align-self: flex-end;
  margin-right: 4%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 0.7rem;
  outline: none;
  text-decoration: none;
`;

export default CardLink;
