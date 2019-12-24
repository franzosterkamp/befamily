import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.text};
`;

export default function Add(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20pt"
      height="20pt"
      viewBox="0 0 32 32"
      version="1.1"
      {...props}
    >
      <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914062 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914062 27 5 22.085938 5 16 C 5 9.914062 9.914062 5 16 5 Z M 15 11 L 15 15 L 11 15 L 11 17 L 15 17 L 15 21 L 17 21 L 17 17 L 21 17 L 21 15 L 17 15 L 17 11 Z M 15 11 " />
    </Svg>
  );
}
