import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

function createMap(places) {
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

  places.map(place => {
    const html = `
    <img src=${place.img}/>
    <div>
    <h5> ${place.name}</h5>
    <span>Kategorie: ${place.category}</span>
    <div>
    <span>Bewertung: ${place.rate} / 5</span>
    <button>...</button>
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
