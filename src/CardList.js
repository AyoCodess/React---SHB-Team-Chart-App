import React from "react";
import Card from "./Card";

const CardList = ({ people }) => {
  return (
    <div className="tc card-container">
      {people.map((user, i) => {
        return (
          <Card
            key={Math.random()}
            id={people[i].id}
            name={people[i].name}
            email={people[i].email}
            image={people[i].image}
          />
        );
      })}
    </div>
  );
};

export default CardList;
