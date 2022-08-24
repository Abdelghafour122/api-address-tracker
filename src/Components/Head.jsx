import React from "react";
import LocationInfo from "./LocationInfo";
import Search from "./Search";

const Head = ({ handleChangeIpAddress }) => {
  return (
    <div className="head">
      <Search handleChangeIpAddress={handleChangeIpAddress} />
      <LocationInfo />
    </div>
  );
};

export default Head;
