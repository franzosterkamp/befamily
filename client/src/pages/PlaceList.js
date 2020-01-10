import React from 'react';
import Card from '../components/card/Card';
import useGetFetch from '../hooks/useFetch';
import { PlacesContainer } from '../components/general/Container';

export default function Placelist({ places }) {
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
