import React from "react";
import "../scss/components/searchbox.scss";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="searchbox-container pa2">
      <input
        className="searchbox pa3 ba"
        type="search"
        placeholder="Search for staff members"
        onChange={searchChange}
      />
      {/* <p className="searchbox-heading"> Scroll through staff</p> */}
    </div>
  );
};

export default Searchbox;
