import React from "react";
import "./scss/card.scss";
import "tachyons";
import Fragment from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Card = ({
  name,
  email,
  image,
  id,
  title,
  website,
  linkedin,
  instagram,
  twitter,
}) => {
  return (
    <>
      <div className=" grow card-body">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-text-content">
          <h1 className="card-title"> {title} </h1>
          <h2 className="card-name"> {name} </h2>
          <p className="card-email">{email}</p>
          <a href={website}>
            <span className="card-website">Website</span>
          </a>
          <div className="card-social-media-container">
            <ul>
              <li>
                <a href={linkedin}>
                  <span>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </span>
                </a>
              </li>
              <li>
                <a href={instagram}>
                  <span>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </span>
                </a>
              </li>
              <li>
                <a href={twitter}>
                  <span>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
