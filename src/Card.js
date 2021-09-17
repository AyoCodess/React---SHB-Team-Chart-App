import React from "react";
import "./scss/card.scss";
import "tachyons";
import Fragment from "react";

const Card = ({ name, email, image, id, title, website }) => {
  return (
    <>
      <div className=" grow card-body">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div>
          <h1 className="card-title"> {title} </h1>
          <h2 className="card-name"> {name} </h2>
          <p className="card-email">{email}</p>
          <a href={website}>
            <span className="card-website">Website</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
