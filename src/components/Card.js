import React, { Component } from "react";
import "../scss/components/card.scss";
import "tachyons";
import Fragment from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

class Card extends Component {
  constructor(
    name,
    email,
    image,
    id,
    title,
    website,
    linkedin,
    instagram,
    twitter,
    job,
    location
  ) {
    super();

    name = this.name;
    email = this.email;
    image = this.image;
    id = this.id;
    title = this.title;
    website = this.website;
    linkedin = this.linkedin;
    instagram = this.instagram;
    twitter = this.instagram;
    job = this.job;
    location = this.location;

    this.state = {
      hasName: false,
      hasEmail: false,
      hasImage: false,
      hasId: false,
      hasTitle: false,
      hasWebsite: false,
      hasLinkedin: false,
      hasInstagram: false,
      hasTwitter: false,
      hasJob: false,
      hasLocation: false,
    };
  }

  hasName() {
    this.setState({ hasName: true });
  }

  hasEmail() {
    this.setState({ hasEmail: true });
  }

  hasId() {
    this.setState({ hasId: true });
  }

  hasTitle() {
    this.setState({ hasTitle: true });
  }

  hasWebsite() {
    this.setState({ hasWebsite: true });
  }

  hasLinkedin() {
    this.setState({ hasLinkedin: true });
  }

  hasInstagram() {
    this.setState({ hasInstagram: true });
  }

  hasTwitter() {
    this.setState({ hasTwitter: true });
  }

  hasJob() {
    this.setState({ hasJob: true });
  }
  hasLocation() {
    this.setState({ hasLocation: true });
  }

  render() {
    const userHasName = this.state.hasName;
    const userHasEmail = this.state.hasEmail;
    const userHasImage = this.state.hasEmail;
    const userHasId = this.state.hasId;
    const userHasTitle = this.state.hasTitle;
    const userHasWebsite = this.state.hasWebsite;
    const userHasLinkedin = this.state.hasLinkedin;
    const userHasInstagram = this.state.hasInstagram;
    const userHasTwitter = this.state.hasTwitter;
    const userHasJob = this.state.hasJob;
    const userHasLocation = this.state.hasLocation;

    if (userHasName && userHasImage) {
      return (hasNameAndImage = (
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
      ));
    }

    if (userHasTitle && userHasName && userHasEmail) {
      return (hasBasicInfo = (
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
      ));
    }

    if (userHasWebsite) {
      return (userHasWebsite_ = (
        <a href={website} target="_blank" rel="noreferrer">
          <span className="card-website">(Click Me)</span>
        </a>
      ));
    }

    if (userHasLinkedin) {
      return (userHasLinkedin_ = (
        <li>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <span>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </span>
          </a>
        </li>
      ));
    }

    if (userHasInstagram) {
      return (userHasInstagram_ = (
        <li>
          <a href={instagram} target="_blank" rel="noreferrer">
            <span>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </span>
          </a>
        </li>
      ));
    }

    if (userHasTwitter) {
      return (userHasTwitter_ = (
        <li>
          <a href={twitter} target="_blank" rel="noreferrer">
            <span>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </span>
          </a>
        </li>
      ));
    }

    return (
      <>
        <div className=" grow card-body">
          {hasNameAndImage}
          {hasBasicInfo}
          {userHasWebsite_}
          <div className="card-social-media-container">
            <ul>
              {userHasLinkedin_}
              {userHasInstagram_}
              {userHasTwitter_}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

// const Card = ({
//   name,
//   email,
//   image,
//   id,
//   title,
//   website,
//   linkedin,
//   instagram,
//   twitter,
//   job,
//   location,
// }) => {
//   return (
//     <>
//       <div className=" grow card-body">
//         <div className="card-image">
//           <img src={image} alt={name} />
//         </div>
//         <div className="card-text-content">
//           <h1 className="card-title"> {title} </h1>
//           <h2 className="card-name"> {name} </h2>
//           <p className="card-email">
//             <a href={`mailto: ${email}`} target="_blank" rel="noreferrer">
//               {email}{" "}
//             </a>
//           </p>
//           <p className="card-job">{job}</p>
//           <p className="card-location">{location}</p>

//           {
//                 if (website !== "") {
//                 <a href={website} target="_blank" rel="noreferrer">
//                     <span className="card-website">Website</span>
//                 </a>
//                 }
//              }

//           <div className="card-social-media-container">
//             <ul>
//               <li>
//                 <a href={linkedin} target="_blank" rel="noreferrer">
//                   <span>
//                     <FontAwesomeIcon icon={["fab", "linkedin"]} />
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href={instagram} target="_blank" rel="noreferrer">
//                   <span>
//                     <FontAwesomeIcon icon={["fab", "instagram"]} />
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <a href={twitter} target="_blank" rel="noreferrer">
//                   <span>
//                     <FontAwesomeIcon icon={["fab", "twitter"]} />
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Card;
