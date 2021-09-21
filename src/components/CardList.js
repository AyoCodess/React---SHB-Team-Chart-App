import React from "react";
import Card from "../components/Card";

const CardList = ({ people }) => {
  return (
    <div className="tc card-container">
      {people.map((user, i) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
            title={user.title}
            website={user.website}
            linkedin={user.linkedin}
            twitter={user.twitter}
            instagram={user.instagram}
            facebook={user.facebook}
            location={user.location}
            job={user.job}
          />
        );
      })}
    </div>
  );
};

export default CardList;
