import styled from './node_modules/@emotion/styled';
import { pulse } from './Animation';

export const Headline = styled.h2`
  margin-top: 10%;
  text-shadow: 1px 1px 1px lightgrey;
  font-size: 2.2rem;
  letter-spacing: 0.2rem;
  animation: ${pulse} 5s infinite;
`;

export const Titel = styled.span`
  width: 90%;
  padding: 10px;
  font-size: 1.3rem;
  text-align: center;
`;

export const AddPlaceHeadline = styled.div`
  width: 80%;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  background-color: ${props => props.theme.colors.text};
  text-align: center;
  font-size: 1rem;
  border-bottom: solid 2px ${props => props.theme.colors.primary};
`;
