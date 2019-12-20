import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
`;

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJhbno4NiIsImEiOiJjazRkeTF5b20wNTdoM2tuNmU5eG1kbDdqIn0.a-iKeML6h5r1j51BuXjvuA';

export default function Map() {
  // navigator.geolocation.getCurrentPosition();

  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);
  const [mapStyle, setMapStyle] = React.useState('mapbox://styles/mapbox/streets-v11');

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map_container',
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom
    });
  });

  return <MapContainer id="map_container"></MapContainer>;
}
