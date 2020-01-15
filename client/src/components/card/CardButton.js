import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
  height: 20px;
  width: 90%;
  color: white;
  line-height: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  text-align: center;
  margin-bottom: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 0.8rem;
  outline: none;
  text-decoration: none;
`;

export default CardLink;
