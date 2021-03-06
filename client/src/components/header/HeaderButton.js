import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import React from 'react';

export const ButtonLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  text-align: center;
  width: 40%;
  height: 75%;
  line-height: 75%;
  text-transform: uppercase;
  border-radius: 7px;
  border: solid 2px ${props => props.theme.colors.text};
  outline: none;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.1rem;
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.prmiary};
  fill: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
`;
