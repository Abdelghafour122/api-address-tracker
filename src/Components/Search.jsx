import React, { useEffect, useState } from "react";
import arrowIcon from "../Images/icon-arrow.svg";

const IPADDRESS_REGEX =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const RESERVED_ADDRESS = "0.0.0.0";

const Search = ({ handleChangeIpAddress }) => {
  const [searchValue, setSearchValue] = useState("");
  const [validIpAddress, setValidIpAddress] = useState(
    IPADDRESS_REGEX.test(searchValue)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    validIpAddress
      ? handleChangeIpAddress(searchValue)
      : alert("Invalid Ip Address!");
    setSearchValue("");
  };

  useEffect(() => {
    setValidIpAddress(
      IPADDRESS_REGEX.test(searchValue) && searchValue !== RESERVED_ADDRESS
    );
  }, [searchValue]);

  return (
    <div className="search">
      <p>IP Address Tracker</p>
      <div className="search-field">
        <input
          type="text"
          value={searchValue}
          placeholder="Search for any IP address or domain"
          onChange={(e) => setSearchValue(e.target.value.trim())}
        />
        <button type="submit" onClick={handleSubmit}>
          <img src={arrowIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
