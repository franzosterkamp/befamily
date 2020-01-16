import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  width: 146px;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 41px;
  z-index: 1000;
  position: absolute;
  border-top-left-radius: 10px;
  border-left: 2px solid ${props => props.theme.colors.primary};
  border-top: 2px solid ${props => props.theme.colors.primary};
  bottom: -1px;
  right: 0px;
  box-shadow: -7px -5px 24px -13px rgba(0, 0, 0, 0.75);
`;

const MenuLink = styled(Link)`
  width: 100%;
  text-align: center;
  height: 70px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  line-height: 70px;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const TopLink = styled(MenuLink)`
  border-top-left-radius: 10px;
`;

export function Menu() {
  return (
    <MenuContainer>
      <TopLink to="/">Startseite</TopLink>
      <MenuLink to="/">Kontakt</MenuLink>
      <MenuLink to="/">Impressum</MenuLink>
      <MenuLink to="/">Favoriten</MenuLink>
    </MenuContainer>
  );
}
