import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';
import SatelliteIcon from '../icons/Satellite';
import { MapButton } from '../components/general/Button';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Marker = styled.div``;

const mapkey = process.env.REACT_APP_MAPKEY;
mapboxgl.accessToken = mapkey;

export default function MapPage({ places }) {
  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);
  const [mapStyle, setMapStyle] = React.useState('mapbox://styles/mapbox/streets-v11');
  const mapRef = React.useRef();

  function createMap(places) {
    const mapData = {
      container: mapRef.current,
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
    // eslint-disable-next-line
    places.map(place => {
      const html = `
      <img src="${place.img}" />
      <h5> ${place.name}</h5>
      <span>${place.category}</span>
      <div>
      <span>Bewertung: ${place.rate} / 5</span>
      <a href="/places/${place._id}"><button> Mehr </button><a/>
      </div>
      `;
      let popup = new mapboxgl.Popup({ closeButton: false })
        .setHTML(html)
        .setMaxWidth('160px')
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
    createMap(places);
    // eslint-disable-next-line
  }, [places, mapStyle]);

  return (
    <MapContainer ref={mapRef}>
      <MapButton onClick={handleClickMap} mapStyle={mapStyle}>
        <SatelliteIcon />
      </MapButton>
      <Marker id="marker"></Marker>
    </MapContainer>
  );
}

MapPage.propTypes = {
  places: PropTypes.object
};
