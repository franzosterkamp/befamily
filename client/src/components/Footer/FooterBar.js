import React from 'react';
import styled from '@emotion/styled';
import FooterButton from './FooterButton';
import add from '../../assets/svg/add.svg';
import sort from '../../assets/svg/sort.svg';
import menu from '../../assets/svg/menu.svg';

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  height: 60px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MiddleButton = styled(FooterButton)`
  border-left: 2px solid ${props => props.theme.colors.text};
  border-right: 2px solid ${props => props.theme.colors.text};
`;

export default function FooterBar() {
  return (
    <Footer>
      <FooterButton>
        <Wrapper>
          <img src={add} />
          <p>Add</p>
        </Wrapper>
      </FooterButton>
      <MiddleButton>
        <Wrapper>
          <img src={sort} />
          <p>Sort</p>
        </Wrapper>
      </MiddleButton>
      <FooterButton>
        <Wrapper>
          <img src={menu} />
          <p>Menu</p>
        </Wrapper>
      </FooterButton>
    </Footer>
  );
}
