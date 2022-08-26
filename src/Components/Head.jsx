import React from "react";
import Attribution from "./Attribution";
import LocationInfo from "./LocationInfo";
import Search from "./Search";

const Head = ({ handleChangeIpAddress, otherData }) => {
  return (
    <div className="head">
      <Attribution />
      <Search handleChangeIpAddress={handleChangeIpAddress} />
      <LocationInfo otherData={otherData} />
    </div>
  );
};

export default Head;
