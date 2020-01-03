import styled from '@emotion/styled';
import { bounce } from './Animation';

export const Headline = styled.h2`
  margin-top: 10%;
  text-shadow: 1px 1px 1px lightgrey;
  font-size: 1.5rem;
  animation: ${bounce} 4s infinite;
`;
