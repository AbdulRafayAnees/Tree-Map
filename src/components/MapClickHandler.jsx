"use client";

import { useMapEvents } from "react-leaflet";

const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;

      onMapClick({
        lat,
        lng,
      });
    },
  });

  return null;
};

export default MapClickHandler;