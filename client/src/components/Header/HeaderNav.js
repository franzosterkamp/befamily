import React from 'react';
import styled from '@emotion/styled';
import HeaderButton from './HeaderButton';
import MapIcon from '../../icons/Map';
import ListIcon from '../../icons/List';

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
  align-items: center;
  align-content: center;
`;

export default function HeaderNav() {
  return (
    <Header>
      <LeftButton>
        <Wrapper>
          <MapIcon />
          <p>Karte</p>
        </Wrapper>
      </LeftButton>
      <HeaderButton>
        <Wrapper>
          <ListIcon />
          <p>Liste</p>
        </Wrapper>
      </HeaderButton>
    </Header>
  );
}
