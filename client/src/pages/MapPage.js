import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';
import SatelliteIcon from '../icons/Satellite';
import { MapButton } from '../components/general/Button';
import 'mapbox-gl/dist/mapbox-gl.css';
import image from '../images/places.png';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Marker = styled.div``;

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJhbno4NiIsImEiOiJjazRkeTF5b20wNTdoM2tuNmU5eG1kbDdqIn0.a-iKeML6h5r1j51BuXjvuA';

export default function Map() {
  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);
  const [mapStyle, setMapStyle] = React.useState('mapbox://styles/mapbox/streets-v11');

  async function createMap() {
    const mapData = {
      container: 'map_container',
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom
    };
    const map = new mapboxgl.Map(mapData);

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    const response = await fetch('/api/places');
    const places = await response.json();
    places.map(place => {
      let popup = new mapboxgl.Popup({ closeButton: false })
        .setHTML(
          `
        <span>
        <img src=${image}/>
        <span/>
        <div>
        <h5> ${place.name}</h5>
        <span>Kategorie: ${place.category}</span>
        <div>
        <span>Bewertung: ${place.rate} / 5</span>
        <button>...</button>
        </div>
        </div>`
        )
        .setMaxWidth('250px')
        .addTo(map);

      new mapboxgl.Marker(Marker)
        .setLngLat([place.lng, place.lat])
        .addTo(map)
        .setPopup(popup)
        .togglePopup();
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
          timeout: 1000
        },
        trackUserLocation: true
      })
    );
  }

  function handleClickMap() {
    if (mapStyle === 'mapbox://styles/mapbox/streets-v11') {
      setMapStyle('mapbox://styles/mapbox/satellite-v9');
    } else {
      setMapStyle('mapbox://styles/mapbox/streets-v11');
    }
  }

  React.useEffect(() => {
    createMap();
  }, [mapStyle]);

  return (
    <MapContainer id="map_container">
      <MapButton onClick={handleClickMap} mapStyle={mapStyle}>
        <SatelliteIcon />
      </MapButton>
      <Marker id="marker"></Marker>
    </MapContainer>
  );
}
