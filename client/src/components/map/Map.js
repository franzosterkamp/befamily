import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';
import SatelliteIcon from '../../icons/Satellite';

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
`;

const Marker = styled.div`
  color: red;
`;

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnJhbno4NiIsImEiOiJjazRkeTF5b20wNTdoM2tuNmU5eG1kbDdqIn0.a-iKeML6h5r1j51BuXjvuA';

export default function Map() {
  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);
  const [mapStyle, setMapStyle] = React.useState('mapbox://styles/mapbox/streets-v11');

  const MapButton = styled.button`
    z-index: 1;
    margin: 15px;
    border: none;
    outline: none;
    padding: 0px;
    border-radius: 5px;
    position: absolute;
    background-color: transparent;
    fill: ${mapStyle === 'mapbox://styles/mapbox/streets-v11'
      ? props => props.theme.colors.primary
      : props => props.theme.colors.secondary};
  `;

  const mapData = {
    container: 'map_container',
    style: mapStyle,
    center: [lng, lat],
    zoom: zoom
  };

  function handleClickMap() {
    if (mapStyle === 'mapbox://styles/mapbox/streets-v11') {
      setMapStyle('mapbox://styles/mapbox/satellite-v9');
    } else {
      setMapStyle('mapbox://styles/mapbox/streets-v11');
    }
  }

  React.useEffect(() => {
    const map = new mapboxgl.Map(mapData);

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    map.on('click', event => {
      const coords = `lat: ${event.lngLat.lat}  lng: ${event.lngLat.lng}`;
      const popup = new mapboxgl.Popup().setText(coords);
      new mapboxgl.Marker(Marker)
        .setLngLat(event.lngLat)
        .setPopup(popup)
        .addTo(map);
    });
  }, [mapStyle]);

  return (
    <MapContainer id="map_container">
      <MapButton onClick={handleClickMap}>
        <SatelliteIcon />
        <Marker id="marker" />
      </MapButton>
    </MapContainer>
  );
}
