const RADIANS = Math.PI / 180;

const mercator = (latitude, longitude) => {
  const RADIUS = 6378137;
  const MAX = 85.0511287798;
  const y = Math.max(Math.min(MAX, latitude), -MAX) * RADIANS;
  return {
    x: RADIUS * longitude * RADIANS,
    y: RADIUS * Math.log(Math.tan(Math.PI / 4 + y / 2))
  };
};

const projectCoordinate = (latitude, longitude, scale) => {
  const {
    x,
    y
  } = mercator(latitude, longitude);
  return {
    x: x * scale,
    y: y * scale
  };
};

const coordinateToPoint = (latitude = 0, longitude = 0, width = 0, height = 0, scale = 0, bounds = {
  xMax: 0,
  xMin: 0,
  yMax: 0,
  yMin: 0
}) => {
  const point = projectCoordinate(latitude, longitude, scale);
  const xScale = width / Math.abs(bounds.xMax - bounds.xMin);
  const yScale = height / Math.abs(bounds.yMax - bounds.yMin);
  const cscale = xScale < yScale ? xScale : yScale;
  return {
    x: (point.x - bounds.xMin) * cscale,
    y: (bounds.yMax - point.y) * cscale
  };
};

const addMarker = (context, {
  x,
  y,
  size,
  color
}) => {
  const center = coordinateToPoint(x, y);
  context.beginPath();
  context.arc(center.x, center.y, size, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
};

const draw = (tile = document.createElement("canvas"), geojson = [], bounds = {}, landColor = "#fff", scale = 1, markers = []) => {
  const {
    width,
    height
  } = tile;
  const context = Object.assign(tile.getContext("2d"), {
    fillStyle: landColor
  });

  for (let i = 0; i < geojson.length; i++) {
    const coords = geojson[i].geometry.coordinates[0];

    for (let j = 0; j < coords.length; j++) {
      const {
        x,
        y
      } = coordinateToPoint(coords[j][1], coords[j][0], width, height, scale, bounds);

      if (j === 0) {
        context.beginPath();
        context.moveTo(x, y);
      } else context.lineTo(x, y);
    }

    context.fill();
  }

  if (markers) for (let i = 0; i < markers.length; i++) addMarker(context, markers[i]);
};

const getBounds = (geojson, scale) => {
  const bounds = {};

  for (let i = 0; i < geojson.length; i++) {
    const coords = geojson[i].geometry.coordinates[0];

    for (let j = 0; j < coords.length; j++) {
      const {
        x,
        y
      } = projectCoordinate(coords[j][1], coords[j][0], scale);
      bounds.xMin = bounds.xMin < x ? bounds.xMin : x;
      bounds.xMax = bounds.xMax > x ? bounds.xMax : x;
      bounds.yMin = bounds.yMin < y ? bounds.yMin : y;
      bounds.yMax = bounds.yMax > y ? bounds.yMax : y;
    }
  }

  return bounds;
};

const createTile = (geojson, zoom, mapcenter, landColor, markers) => {
  const features = geojson.features || geojson;
  const scale = Math.pow(2, parseInt(zoom));
  const bounds = getBounds(features, scale);
  const width = Math.ceil(256 * scale);
  const height = Math.ceil(width / 1.041975309);
  const center = coordinateToPoint(mapcenter[0], mapcenter[1], width, height, scale, bounds);
  const tile = Object.assign(document.createElement("canvas"), {
    width,
    height
  });
  draw(tile, features, bounds, landColor, scale, markers);
  return {
    canvas: tile,
    center,
    width,
    height
  };
};

const draw$1 = (map, tile, waterColor) => {
  const {
    width,
    height
  } = map;
  const context = map.getContext("2d");
  context.fillStyle = waterColor;
  context.fillRect(0, 0, width, height);
  const center = {
    x: Math.ceil(width / 2 - tile.center.x),
    y: Math.ceil(height / 2 - tile.center.y)
  };
  const tilesBefore = Math.ceil(center.x / tile.width);
  const tilesAfter = Math.ceil((width - (center.x + tile.width)) / tile.width);

  for (let tileCount = 1; tileCount <= tilesBefore; tileCount++) {
    context.drawImage(tile.canvas, center.x - tile.width * tileCount, center.y);
  }

  for (let tileCount = 1; tileCount <= tilesAfter; tileCount++) {
    context.drawImage(tile.canvas, center.x + tile.width * tileCount, center.y);
  }

  context.drawImage(tile.canvas, center.x, center.y);
};

var index = (el = document.body, geojson = {}, {
  zoom: _zoom = 0,
  center: _center = [0, 0],
  waterColor: _waterColor = "#b3d1ff",
  landColor: _landColor = "#fff",
  markers: _markers = [{
    color: "#333",
    size: 5
  }]
} = {}) => {
  const map = document.createElement("canvas");
  const tile = createTile(geojson, _zoom, _center, _landColor, _markers);
  new ResizeObserver(() => {
    const {
      width,
      height
    } = el.getBoundingClientRect();
    Object.assign(map, {
      width,
      height
    });
    draw$1(map, tile, _waterColor);
  }).observe(el);
  return {
    map,
    tile
  };
};

export default index;