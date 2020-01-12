import React from 'react';
import Card from '../components/card/Card';
import { PlacesContainer } from '../components/general/Container';
import PropTypes from 'prop-types';

export default function PlacelistPage({ places }) {
  return (
    <PlacesContainer>
      {places &&
        places.map(place => (
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
    </PlacesContainer>
  );
}

PlacelistPage.propTypes = {
  places: PropTypes.object
};
