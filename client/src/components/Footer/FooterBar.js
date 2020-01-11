import React from 'react';
import styled from '@emotion/styled';
import FooterButton from './FooterButton';
import AddIcon from '../../icons/Add';
import SortIcon from '../../icons/Sort';
import MenuIcon from '../../icons/Menu';
import { useLocation } from 'react-router-dom';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  height: 40px;
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin-left: 15%;
  background-color: ${props =>
    props.active ? props.theme.colors.text : props.theme.colors.primary};
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  fill: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text)};
  border-top: 3px solid ${props => props.theme.colors.primary};
`;

const Text = styled.div``;

export default function FooterBar() {
  const location = useLocation();

  return (
    <Footer>
      <FooterButton active={location.pathname === '/add'} to="/add">
        <Wrapper active={location.pathname === '/add'}>
          <AddIcon />
          <Text>Neu</Text>
        </Wrapper>
      </FooterButton>
      <FooterButton active={location.pathname === '/filter'} to="/filter">
        <Wrapper active={location.pathname === '/filter'}>
          <SortIcon />
          <Text>Filter</Text>
        </Wrapper>
      </FooterButton>
      <FooterButton>
        <Wrapper>
          <MenuIcon />
          <Text>Menü</Text>
        </Wrapper>
      </FooterButton>
    </Footer>
  );
}
