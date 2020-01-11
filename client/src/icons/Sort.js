import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg``;

export default function Ball(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="12pt"
      height="12pt"
      viewBox="0 0 16 16"
      version="1.1"
      {...props}
    >
      <path d="M 5 3 L 16 3 L 16 4 L 5 4 Z M 5 8 L 14 8 L 14 9 L 5 9 Z M 5 13 L 12 13 L 12 14 L 5 14 Z M 5 13 " />
      <path d="M 0 12 L 3 12 L 3 15 L 0 15 Z M 0 12 " />
      <path d="M 2 13 L 2 14 L 1 14 L 1 13 L 2 13 M 3 12 L 0 12 L 0 15 L 3 15 Z M 3 12 " />
      <path d="M 0 7 L 3 7 L 3 10 L 0 10 Z M 0 7 " />
      <path d="M 2 8 L 2 9 L 1 9 L 1 8 L 2 8 M 3 7 L 0 7 L 0 10 L 3 10 Z M 3 7 " />
      <path d="M 0 2 L 3 2 L 3 5 L 0 5 Z M 0 2 " />
      <path d="M 2 3 L 2 4 L 1 4 L 1 3 L 2 3 M 3 2 L 0 2 L 0 5 L 3 5 Z M 3 2 " />
    </Svg>
  );
}
