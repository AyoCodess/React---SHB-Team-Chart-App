import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import reportWebVitals from "./reportWebVitals";
import CardList from "./CardList";
import "tachyons";
import { people } from "./people";

ReactDOM.render(
  <React.StrictMode>
    <CardList people={people} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
