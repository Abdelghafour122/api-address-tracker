import React from "react";
import { MapContainer } from "react-leaflet";
import Map from "./Map";

const MapHolder = ({ coordinates }) => {
  return (
    <div className="map-holder">
      <MapContainer
        className="map-container"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <Map coordinates={coordinates} />
      </MapContainer>
    </div>
  );
};

export default MapHolder;
