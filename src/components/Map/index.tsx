import React, { useState } from 'react';

import ReactMapGL, { ViewportProps } from 'react-map-gl';

const Map: React.FC = () => {
  const [viewport, setViewPort] = useState<ViewportProps>({
    latitude: -22.996771,
    longitude: -43.386903,
    width: 1000,
    height: 500,
    zoom: 10,
    bearing: 1,
    pitch: 1,
    minZoom: 1,
    maxZoom: 100,
    altitude: 1,
    minPitch: 1,
    maxPitch: 1,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/davidjentjens/ckc0n6l7i0n431ipe1116b0ka"
      onViewportChange={(item) => {
        setViewPort(item);
      }}
    />
  );
};

export default Map;
