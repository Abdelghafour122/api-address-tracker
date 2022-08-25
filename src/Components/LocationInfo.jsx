import React from "react";

const LocationInfo = ({ otherData }) => {
  return (
    <div className="location-info">
      <div className="section">
        <p>IP Address</p>
        <p> {otherData.ipAddress} </p>
      </div>
      <div className="section">
        <p>Location</p>
        <p>
          {`${otherData.city}, ${otherData.region}`} <br /> {otherData.zip}
        </p>
      </div>
      <div className="section">
        <p>Timezone</p>
        {/* <p>UTC</p> */}
        <p> {otherData.timezone} </p>
      </div>
      <div className="section">
        <p>ISP</p>
        <p> {otherData.isp} </p>
      </div>
    </div>
  );
};

export default LocationInfo;
