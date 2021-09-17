import React from "react";
import Searchbox from "./Searchbox";
import CardList from "./CardList";
import { people } from "./people";
import Fragment from "react";
import "./scss/app.scss";

const App = () => {
  return (
    <>
      <div class="main-app tc">
        <h1 className=" app-title tc f1">SHB Organization</h1>
        <Searchbox />
        <CardList people={people} />;
      </div>
    </>
  );
};

export default App;
