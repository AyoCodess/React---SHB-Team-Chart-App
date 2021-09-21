import React from "react";
import "../scss/components/searchbox.scss";

const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div className="searchbox-container pa2">
      <input
        className="searchbox pa3 ba"
        type="search"
        placeholder="Search by staff member name or title"
        onChange={(e) => searchChange(e.target.value)}
      />
      {/* <p className="searchbox-heading"> Scroll through staff</p> */}
    </div>
  );
};

export default Searchbox;
