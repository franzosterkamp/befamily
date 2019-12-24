import React from 'react';
import styled from '@emotion/styled';
import Card from '../components/card/Card';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;

export default function Placelist() {
  const [places, setPlaces] = React.useState([]);

  async function fetchPlaces() {
    const response = await fetch('http://localhost:3004/places');
    const newPlaces = await response.json();
    setPlaces(newPlaces);
  }
  React.useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <Container>
      {places.map(place => (
        <Card
          key={place.id}
          name={place.name}
          age={place.age}
          quarter={place.quarter}
          rate={place.rate}
        />
      ))}
    </Container>
  );
}
