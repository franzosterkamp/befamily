import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import main from './theme/defaultTheme';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/header/HeaderNav';
import FooterBar from './components/footer/FooterBar';
import PlaceList from './pages/PlaceList';
import AddPage from './pages/AddPlacePage';
import Landingpage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import FilterPage from './pages/FilterPage';
import MapPage from './pages/MapPage';
import InfoPage from './pages/InfoPage';
import { Menu } from './components/menu/Menu';

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
  const [places, setPlaces] = React.useState([]);
  const [menuClick, setMenuClick] = React.useState(false);

  const [filters, setFilters] = React.useState({
    age: '',
    category: '',
    quarter: ''
  });

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

  React.useEffect(() => {
    async function doFetch() {
      const response = await fetch(`/api/places`);
      const fetchedPlaces = await response.json();
      const newPlaces = filterPlaces(fetchedPlaces);
      setPlaces(newPlaces);
    }

    doFetch();
  }, [filters.age, filters.category, filters.quarter]);

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
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Router>
        <Container>
          <HeaderNav />
          <Main>
            <Switch>
              <Route exact path="/">
                <Landingpage />
              </Route>
              <Route path="/card">{places && <MapPage places={places} />}</Route>
              <Route path="/list">
                <PlaceList places={places} />
              </Route>
              <Route path="/add">
                <AddPage />
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
              <Route path="/:placeId">
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
