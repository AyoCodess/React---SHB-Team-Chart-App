import React, { Component } from "react";
import "../scss/components/card.scss";
import "tachyons";
import Fragment from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Card = ({
  image,
  name,
  title,
  email,
  job,
  location,
  website,
  linkedin,
  instagram,
  twitter,
}) => {
  return (
    <>
      <div className=" grow card-body">
        <div className="card-image">
          {image && <img src={image} alt={name || "SHB Mentor Image"} />}
        </div>
        <div class="card-body_container">
          <div className="card-text-content">
            <h1 className="card-title"> {title} </h1>
            <h2 className="card-name"> {name} </h2>
            <p className="card-email">
              <a href={`mailto: ${email}`} target="_blank" rel="noreferrer">
                {email}
              </a>
            </p>
            <p className="card-job">{job}</p>
            <p className="card-location">{location}</p>
          </div>
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              <span className="card-website">Visit Website</span>
            </a>
          )}
          <div className="card-social-media-container">
            <ul>
              {linkedin && (
                <li>
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <span>
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </span>
                  </a>
                </li>
              )}
              {instagram && (
                <li>
                  <a href={instagram} target="_blank" rel="noreferrer">
                    <span>
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </span>
                  </a>
                </li>
              )}
              {twitter && (
                <li>
                  <a href={twitter} target="_blank" rel="noreferrer">
                    <span>
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
