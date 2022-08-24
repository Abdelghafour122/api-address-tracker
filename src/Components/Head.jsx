import React from "react";
import LocationInfo from "./LocationInfo";
import Search from "./Search";

const Head = () => {
  return (
    <div className="head">
      <Search />
      <LocationInfo />
    </div>
  );
};

export default Head;
