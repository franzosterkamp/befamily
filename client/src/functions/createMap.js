import React from 'react';

export default function createMap() {
  const [mapStyle, setMapStyle] = React.useState('mapbox://styles/mapbox/streets-v11');
  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);

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

  // const response = await fetch('/api/places');
  // const places = await response.json();

  places.map(place => {
    const html = `
    <img src="${place.img}" />
    <div>
    <h5> ${place.name}</h5>
    <span>${place.category}</span>
    <div>
    <span>Bewertung: ${place.rate} / 5</span>
    <a href="http://localhost:3000/${place._id}"><button> > </button><a/>
    </div>
    </div>`;

    let popup = new mapboxgl.Popup({ closeButton: false })
      .setHTML(html)
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
