import React from 'react';
import styled from '@emotion/styled';
import { Button } from './HeaderButton';
import MapIcon from '../../icons/Map';
import ListIcon from '../../icons/List';
import { useLocation } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  height: 59px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export default function HeaderNav() {
  const location = useLocation();
  return (
    <Header>
      <Button to="/card" active={location.pathname === '/card'}>
        <Wrapper>
          <MapIcon />
          <p>Karte</p>
        </Wrapper>
      </Button>
      <Button to="/list" active={location.pathname === '/list'}>
        <Wrapper>
          <ListIcon />
          <p>Orte</p>
        </Wrapper>
      </Button>
    </Header>
  );
}
