import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import React from 'react';

const HeaderButton = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-align: center;
  width: 50%;
  height: 100%;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  font-size: 14px;
  text-decoration: none;
`;

export default HeaderButton;
