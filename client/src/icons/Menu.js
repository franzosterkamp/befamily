import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.text};
`;

export default function Menu(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="15pt"
      height="15pt"
      viewBox="0 0 24 24"
      version="1.1"
      {...props}
    >
      <path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z M 0 20 " />
    </Svg>
  );
}
