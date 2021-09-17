import React from "react";
import Card from "./Card";

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
            linkedin={people[i].website}
            twitter={people[i].website}
            instagram={people[i].website}
          />
        );
      })}
    </div>
  );
};

export default CardList;
