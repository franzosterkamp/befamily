import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import main from './theme/defaultTheme';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/header/HeaderNav';
import FooterBar from './components/footer/FooterBar';
import PlaceList from './pages/PlaceList';
import AddPage from './pages/AddPlace';
import Landingpage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import FilterPage from './pages/FilterPage';
import MapPage from './pages/MapPage';
import useGetFetch from './hooks/useFetch';
import InfoPage from './pages/InfoPage';

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
  let places = useGetFetch('/api/places');

  const [filter, setFilter] = React.useState({
    age: '',
    category: '',
    quarter: ''
  });

  function handleChange(event) {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value
    });
  }

  function unsetFilter() {
    setFilter({ age: '', category: '', quarter: '' });
  }

  if (filter.age) {
    console.log(filter.age);
    places = places.filter(place => place.age.includes(filter.age));
  }

  if (filter.category) {
    console.log(filter.category);
    places = places.filter(place => place.category.includes(filter.category));
  }

  if (filter.quarter) {
    console.log(filter.quarter);
    places = places.filter(place => place.quarter.includes(filter.quarter));
  }

  console.log(filter);

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
              <Route path="/card">
                <MapPage />
              </Route>
              <Route path="/list">
                <PlaceList places={places} />
              </Route>
              <Route path="/add">
                <AddPage />
              </Route>
              <Route path="/filter">
                <FilterPage filter={filter} handleChange={handleChange} unsetFilter={unsetFilter} />
              </Route>
              <Route path="/info">
                <InfoPage />
              </Route>
              <Route path="/:placeId">
                <DetailPage />
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
