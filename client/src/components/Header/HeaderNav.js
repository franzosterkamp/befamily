import React from './node_modules/react';
import styled from './node_modules/@emotion/styled';
import HeaderButton from './HeaderButton';
import MapIcon from '../../icons/Map';
import ListIcon from '../../icons/List';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  height: 60px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  width: 100%;
`;
const LeftButton = styled(HeaderButton)`
  border-right: 2px ${props => props.theme.colors.text} solid;
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
