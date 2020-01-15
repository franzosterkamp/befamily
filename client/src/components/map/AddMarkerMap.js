import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';
import SatelliteIcon from '../../icons/Satellite';
import { MapButton } from '../General/Button';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Marker = styled.div``;

const mapkey = process.env.REACT_APP_MAPKEY;
mapboxgl.accessToken = mapkey;

export default function Map({ onMarkerSet }) {
  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);
  const [mapStyle, setMapStyle] = React.useState('mapbox://styles/mapbox/streets-v11');
  const mapRef = React.useRef();

  function createMap() {
    let marker = null;

    const mapData = {
      container: mapRef.current,
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom
    };
    const map = new mapboxgl.Map(mapData);

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
          timeout: 1000
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
      onMarkerSet(event.lngLat.lat, event.lngLat.lng);
      if (marker === null) {
        marker = new mapboxgl.Marker(Marker).setLngLat(event.lngLat).addTo(map);
      } else {
        marker.remove();
        marker = new mapboxgl.Marker(Marker).setLngLat(event.lngLat).addTo(map);
      }
    });

    return;
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
    // eslint-disable-next-line
  }, [mapStyle]);

  return (
    <MapContainer ref={mapRef}>
      <MapButton onClick={handleClickMap} mapStyle={mapStyle}>
        <SatelliteIcon />
      </MapButton>
      <Marker id="marker" />
    </MapContainer>
  );
}
Map.propTypes = {
  onMarkerSet: PropTypes.func
};
