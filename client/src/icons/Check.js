import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.extra};
  margin-right: 5px;
`;

export default function Check(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </Svg>
  );
}
