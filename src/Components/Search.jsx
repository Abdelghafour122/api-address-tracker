import React from "react";
import arrowIcon from "../Images/icon-arrow.svg";

const Search = () => {
  return (
    <div className="search">
      <p>IP Address Tracker</p>
      <div className="search-field">
        <input type="text" placeholder="Search for any IP address or domain" />
        <button type="submit">
          <img src={arrowIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
