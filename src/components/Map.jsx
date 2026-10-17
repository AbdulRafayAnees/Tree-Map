"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import MapClickHandler from "./MapClickHandler";

const treeIcon = new L.Icon({
  iconUrl: "/tree-marker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const Map = ({
  trees,
  onMapClick,
}) => {

  return (
    <MapContainer
      center={[24.8607, 67.0011]}
      zoom={12}
      className="h-125 w-full rounded-lg"
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapClickHandler
        onMapClick={onMapClick}
      />

      {trees.map((tree) => (
        <Marker
          key={tree.id}
          position={[tree.lat, tree.lng]}
          icon={treeIcon}
        >
          <Popup>

            <div className="min-w-45">
              <h3 className="text-lg font-bold text-green-700">
                🌳 {tree.treeName}
              </h3>

              <p className="mt-2">
                <strong>Planted by:</strong>{" "}
                {tree.userName}
              </p>

              <p>
                <strong>Latitude:</strong>{" "}
                {tree.lat}
              </p>

              <p>
                <strong>Longitude:</strong>{" "}
                {tree.lng}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Planted on: {tree.date}
              </p>
            </div>

          </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
};

export default Map;