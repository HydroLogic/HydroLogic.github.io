

L.mapbox.accessToken = 'pk.eyJ1IjoiaHlkcm9sb2dpY2FsIiwiYSI6ImNpaWh1Y2JjejAwZXp2NG01aWs0YXYyOXEifQ.4g5WxB4lRYonq7YdyUmsIA';

var southWest = L.latLng(32.53427076600008, -124.40917464699993),
    northEast = L.latLng(42.009505681000064, -114.13119958999994),
    bounds = L.latLngBounds(southWest, northEast);

var map = L.mapbox.map('map', 'mapbox.streets', {
    style: 'mapbox://styles/hydrological/cijq8bdx1004i8vlwcnkd8etb',
    maxBounds: bounds,
    maxZoom: 19,
    minZoom: 4
});

// Add in drawing control
var featureGroup = L.featureGroup().addTo(map);

var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: featureGroup
  },
  draw: {
    polygon: true,
    polyline: false,
    rectangle: false,
    circle: false,
    marker: false
  }
}).addTo(map);

map.on('draw:created', showPolygonArea);
map.on('draw:edited', showPolygonAreaEdited);

function showPolygonAreaEdited(e) {
  e.layers.eachLayer(function(layer) {
    showPolygonArea({ layer: layer });
  });
}
function showPolygonArea(e) {
  featureGroup.clearLayers();
  featureGroup.addLayer(e.layer);
  e.layer.bindPopup((LGeo.area(e.layer) / 1000000).toFixed(2) + ' km<sup>2</sup>');
  e.layer.openPopup();
}
