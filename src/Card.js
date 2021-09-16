import React from "react";
import "./scss/card.scss";
import "tachyons";
import Fragment from "react";

const card = ({ name, email, image, id }) => {
  return (
    <>
      <div className=" grow card-body">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div>
          <h2 className="card-name"> {name} </h2>
          <p className="card-email">{email}</p>
        </div>
      </div>
    </>
  );
};

export default card;
