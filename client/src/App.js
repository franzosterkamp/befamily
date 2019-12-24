import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import main from './theme/defaultTheme';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/header/HeaderNav';
import FooterBar from './components/footer/FooterBar';
import Map from './components//map/Map';
import PlaceList from './pages/PlaceList';
import AddPage from './pages/AddPlace';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  overflow: auto;
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Router>
        <Container>
          <HeaderNav />
          <Main>
            <Switch>
              <Route exact path="/">
                <Map />
              </Route>
              <Route path="/list">
                <PlaceList />
              </Route>
              <Route path="/add">
                <AddPage />
              </Route>
            </Switch>
          </Main>
          <FooterBar />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
