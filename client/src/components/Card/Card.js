import React from "react";
import "./style.css";
const active = require("../../Images/Hedgehogs/activeHog.png");

function Card() {
  return (
    <div className="cardWrapper">
      <div className="img-container">
        <a href="/active">
          <span>
            <img src={active} className="linkBtn" alt="activeHog" />
          </span>
        </a>
      </div>
      <div className="content" />
    </div>
  );
}

export default Card;
