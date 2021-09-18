import React from "react";
import Card from "../components/Card";

const CardList = ({ people }) => {
  return (
    <div className="tc card-container">
      {people.map((user, i) => {
        return (
          <Card
            key={i}
            id={people[i].id}
            name={people[i].name}
            email={people[i].email}
            image={people[i].image}
            title={people[i].title}
            website={people[i].website}
            linkedin={people[i].linkedin}
            twitter={people[i].twitter}
            instagram={people[i].instagram}
            location={people[i].location}
            job={people[i].job}
          />
        );
      })}
    </div>
  );
};

export default CardList;
