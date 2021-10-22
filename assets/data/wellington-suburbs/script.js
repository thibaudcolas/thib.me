(function(L, StationsData, SuburbsData) {
  "use strict";

  var map = L.map("map");

  var osmTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  var osmAttrib =
    'Map data © <a href="https://www.openstreetmap.org">OSM</a> contributors';

  L.tileLayer(osmTiles, {
    minZoom: 8,
    maxZoom: 16,
    attribution: osmAttrib,
  }).addTo(map);

  // Centered on Mount Eden.
  map.setView([-41.286, 174.767], 12);

  L.geoJson(StationsData).addTo(map);
  L.geoJson(SuburbsData).addTo(map);
})(window.L, window.StationsData, window.SuburbsData);
