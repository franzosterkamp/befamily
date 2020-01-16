import React from 'react';
import Card from '../components/card/Card';
import { PlacesContainer } from '../components/general/Container';
import PropTypes from 'prop-types';
import NoResultCard from '../components/card/NoResultCard';

export default function PlacelistPage({ places }) {
  console.log(places);
  return (
    <PlacesContainer>
      {places.map(place => (
        <Card
          key={place._id}
          id={place._id}
          name={place.name}
          age={place.age}
          quarter={place.quarter}
          rate={place.rate}
          img={place.img}
          category={place.category}
        />
      ))}
      {places.length === 0 ? <NoResultCard /> : ''}
    </PlacesContainer>
  );
}

PlacelistPage.propTypes = {
  places: PropTypes.array
};
