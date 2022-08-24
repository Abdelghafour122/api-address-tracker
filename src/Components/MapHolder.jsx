import React from "react";
import { MapContainer } from "react-leaflet";
import Map from "./Map";

const MapHolder = () => {
  return (
    <div className="map-holder">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <Map />
      </MapContainer>
    </div>
  );
};

export default MapHolder;
