import React from "react";
import "./scss/searchbox.scss";

const Searchbox = () => {
  return (
    <div class="searchbox-container pa2">
      <input
        className="searchbox pa3 ba"
        type="search"
        placeholder="Search for staff members"
      />
    </div>
  );
};

export default Searchbox;
