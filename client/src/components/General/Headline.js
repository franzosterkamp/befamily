import styled from '@emotion/styled';
import { pulse } from './Animation';

export const Headline = styled.h2`
  margin-top: 10%;
  text-shadow: 1px 1px 1px lightgrey;
  font-size: 2.2rem;
  animation: ${pulse} 4s infinite;
`;
