import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const logo = require("../../Images/Hedgehogs/maxRelaxLogo.png");

function Nav(props) {
  {
    console.log(props.auth);
  }
  return (
    <nav className="navbar navbar-expand-lg mainNav">
      <Link className="navbar-brand" to="/">
        <span>
          <img src={logo} className="homeBtn" alt="logo" />
        </span>
      </Link>
      {props.auth.auth ? (
        <div>
          <h4>Hello, {props.auth.name.split(" ")[0]}</h4>
        </div>
      ) : (
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
      )}
    </nav>
  );
}

export default Nav;
