import React from 'react';
import styled from '@emotion/styled';
import FooterButton from './FooterButton';
import AddIcon from '../../icons/Add';
import SortIcon from '../../icons/Sort';
import MenuIcon from '../../icons/Menu';

const Footer = styled.footer`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  height: 40px;
  width: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  text-align: center;
`;

const MiddleButton = styled(FooterButton)`
  border-left: 2px solid ${props => props.theme.colors.text};
  border-right: 2px solid ${props => props.theme.colors.text};
`;

export default function FooterBar() {
  return (
    <Footer>
      <FooterButton to="/add">
        <Wrapper>
          <AddIcon />
          <p>Add</p>
        </Wrapper>
      </FooterButton>
      <MiddleButton>
        <Wrapper>
          <SortIcon />
          <p>Sort</p>
        </Wrapper>
      </MiddleButton>
      <FooterButton>
        <Wrapper>
          <MenuIcon />
          <p>Menu</p>
        </Wrapper>
      </FooterButton>
    </Footer>
  );
}
