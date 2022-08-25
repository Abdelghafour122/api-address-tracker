import React from "react";
import LocationInfo from "./LocationInfo";
import Search from "./Search";

const Head = ({ handleChangeIpAddress, otherData }) => {
  return (
    <div className="head">
      <Search handleChangeIpAddress={handleChangeIpAddress} />
      <LocationInfo otherData={otherData} />
    </div>
  );
};

export default Head;
