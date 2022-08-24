import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./Components/Head";
import MapHolder from "./Components/MapHolder";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState(""); //FILL OTHER STATES LATER

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const handleChangeIpAddress = (newIpAddress) => {
    setIpAddress(newIpAddress);
  };

  useEffect(() => {
    const getPosition = async () => {
      await fetch(`http://ip-api.com/json/${ipAddress}`)
        .then((res) => res.json())
        .then((data) => {
          ipAddress || setIpAddress(data.query);
          setCoordinates({ lat: data.lat, lng: data.lon });
          // SET OTHER STATES LATER
        });
    };
    getPosition();
  }, [ipAddress]);

  return (
    <main className="App">
      {/* PASS OTHER STATES LATER */}
      <Head
        coordinates={coordinates}
        handleChangeIpAddress={handleChangeIpAddress}
      />
      <MapHolder coordinates={coordinates} />
    </main>
  );
}

export default App;
