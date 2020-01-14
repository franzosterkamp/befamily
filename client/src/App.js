import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './theme/defaultTheme';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/Header/HeaderNav';
import FooterBar from './components/Footer/FooterBar';
import PlaceListPage from './pages/PlaceListPage';
import AddPlacePage from './pages/AddPlacePage';
import Landingpage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import FilterPage from './pages/FilterPage';
import MapPage from './pages/MapPage';
import InfoPage from './pages/InfoPage';
import { Menu } from './components/menu/Menu';
import useFetch from './hooks/useFetch';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  overflow: auto;
  height: 100%;
`;

function App() {
  const [menuClick, setMenuClick] = React.useState(false);
  const [places, updatePlaces] = useFetch('/api/places');

  const [filters, setFilters] = React.useState({
    age: '',
    category: '',
    quarter: ''
  });

  const filteredPlaces = filterPlaces(places || []);

  function filterPlaces(newPlaces) {
    if (filters.category) {
      newPlaces = newPlaces.filter(place => place.category.includes(filters.category));
    }

    if (filters.quarter) {
      newPlaces = newPlaces.filter(place => place.quarter.includes(filters.quarter));
    }

    if (filters.age) {
      newPlaces = newPlaces.filter(place => place.age.includes(filters.age));
    }
    return newPlaces;
  }

  function handleChange(event) {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  }
  function unsetFilters() {
    setFilters({ age: '', category: '', quarter: '' });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Container>
          <HeaderNav />
          <Main>
            <Switch>
              <Route exact path="/">
                <Landingpage />
              </Route>
              <Route path="/card">
                <MapPage places={filteredPlaces} />
              </Route>
              <Route path="/list">
                <PlaceListPage places={filteredPlaces} />
              </Route>
              <Route path="/add">
                <AddPlacePage onAddPlace={updatePlaces} />
              </Route>
              <Route path="/filter">
                <FilterPage
                  filters={filters}
                  handleChange={handleChange}
                  unsetFilters={unsetFilters}
                />
              </Route>
              <Route path="/info">
                <InfoPage />
              </Route>
              <Route path="/places/:placeId">
                <DetailPage />
              </Route>
            </Switch>
          </Main>
          {menuClick && <Menu />}
          <FooterBar onClick={() => setMenuClick(!menuClick)} menuClick={menuClick} />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
