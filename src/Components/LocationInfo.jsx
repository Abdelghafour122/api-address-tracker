import React from "react";

const LocationInfo = () => {
  return (
    <div className="location-info">
      <div className="section">
        <p>IP Address</p>
        <p></p>
      </div>
      <div className="section">
        <p>Location</p>
        <p></p>
      </div>
      <div className="section">
        <p>Timezone</p>
        <p>UTC</p> {/* add the utc from the api*/}
      </div>
      <div className="section">
        <p>ISP</p>
        <p></p>
      </div>
    </div>
  );
};

export default LocationInfo;
