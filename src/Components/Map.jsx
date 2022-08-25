import { marker } from "leaflet";
import React, { useEffect } from "react";
import { TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import locationIcon from "../Images/icon-location.svg";

const Map = ({ coordinates }) => {
  const map = useMapEvents({
    click: () => map.locate(),
    locationfound: (location) => {
      map.flyTo(location.latlng);
    },
  });

  useEffect(() => {
    if (coordinates.lat !== 0 && coordinates.lng !== 0) {
      map.flyTo(coordinates);
    }
  }, [coordinates, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.lat || 51.505, coordinates.lng || -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};

export default Map;
