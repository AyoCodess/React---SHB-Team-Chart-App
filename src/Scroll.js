import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./scss/scroll.scss";

const Scroll = (props) => {
  return <div className="scroll">{props.children}</div>;
};

export default Scroll;
