import React from 'react';
import styled from '@emotion/styled';
import HeaderButton from './HeaderButton';
import list from '../assets/svg/list.svg';
import map from '../assets/svg/map.svg';
import Img from './HeaderImg';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  height: 60px;
  width: 100%;
`;
const LeftButton = styled(HeaderButton)`
  border-right: 3px ${props => props.theme.colors.text} solid;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function HeaderNav() {
  return (
    <Header>
      <LeftButton>
        <Wrapper>
          <Img src={map}></Img>
          <p>Karte</p>
        </Wrapper>
      </LeftButton>
      <HeaderButton>
        <Wrapper>
          <Img src={list}></Img>
          <p>Liste</p>
        </Wrapper>
      </HeaderButton>
    </Header>
  );
}
