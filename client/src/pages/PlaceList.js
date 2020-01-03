import React from 'react';
import styled from '@emotion/styled';
import Card from '../components/card/Card';
import useGetFetch from '../hooks/useFetch';
import { PlacesContainer } from '../components/general/Container';

export default function Placelist() {
  const url = 'http://localhost:3004/places';
  const places = useGetFetch(url);

  return (
    <PlacesContainer>
      {places.map(place => (
        <Card
          key={place.id}
          name={place.name}
          age={place.age}
          quarter={place.quarter}
          rate={place.rate}
        />
      ))}
    </PlacesContainer>
  );
}
