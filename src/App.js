import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./Components/Head";
import MapHolder from "./Components/MapHolder";
import Attribution from "./Components/Attribution";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [isp, setIsp] = useState("");
  const [timezone, setTimezone] = useState("");

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
          setCity(data.city);
          setRegion(data.regionName);
          setIsp(data.isp);
          setTimezone(data.timezone);
          setZip(data.zip);
        });
    };
    getPosition();
  }, [ipAddress]);

  return (
    <main className="App">
      <Head
        coordinates={coordinates}
        otherData={{ ipAddress, city, region, isp, timezone, zip }}
        handleChangeIpAddress={handleChangeIpAddress}
      />
      <MapHolder coordinates={coordinates} />
    </main>
  );
}

export default App;
