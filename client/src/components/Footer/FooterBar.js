import React from 'react';
import styled from '@emotion/styled';
import { FooterButton, FilterButton, MenuButton } from './FooterButton';
import AddIcon from '../../icons/Add';
import SortIcon from '../../icons/Sort';
import MenuIcon from '../../icons/Menu';
import { useLocation } from 'react-router-dom';
import { FooterWrapper as Wrapper, MenuWrapper } from '../General/Wrapper';
import PropTypes from 'prop-types';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.16);
  height: 40px;
  width: 100%;
`;

const Text = styled.div``;

export default function FooterBar({ onClick, menuClick }) {
  const location = useLocation();
  return (
    <Footer>
      <FooterButton active={location.pathname === '/add'} to="/add">
        <Wrapper active={location.pathname === '/add'}>
          <AddIcon />
          <Text>Neu</Text>
        </Wrapper>
      </FooterButton>
      <FilterButton active={location.pathname === '/filter'} to="/filter">
        <Wrapper active={location.pathname === '/filter'}>
          <SortIcon />
          <Text>Filter</Text>
        </Wrapper>
      </FilterButton>
      <MenuButton onClick={onClick} menuClick={menuClick}>
        <MenuWrapper menuClick={menuClick}>
          <MenuIcon />
          <Text>Menü</Text>
        </MenuWrapper>
      </MenuButton>
    </Footer>
  );
}

FooterBar.propTypes = {
  onClick: PropTypes.func,
  menuClick: PropTypes.bool
};
