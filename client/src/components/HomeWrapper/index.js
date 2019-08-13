import React from "react";
import "./style.css";

function HomeWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default HomeWrapper;
