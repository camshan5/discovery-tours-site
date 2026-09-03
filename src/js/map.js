//
// map.js
// Theme module
//

const maps = document.querySelectorAll("[data-map]");
const accessToken = window.mapboxAccessToken;

maps.forEach((map) => {
  const elementOptions = map.dataset.map ? JSON.parse(map.dataset.map) : {};

  const defaultOptions = {
    container: map,
    style: "mapbox://styles/mapbox/light-v9",
    scrollZoom: false,
    interactive: false,
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  const token = elementOptions.accessToken || accessToken;

  if (!token) {
    return;
  }

  delete options.accessToken;

  // Get access token
  mapboxgl.accessToken = token;

  // Init map
  new mapboxgl.Map(options);
});
