import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./login.css";
const loginHog = require("../Images/Hedgehogs/coolHog.png");

class Login extends Component {
  state = {
    name: "",
    email: "",
    zipcode: 0,
    password: "",
    fb_id: ""
  };

  createUser = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        zipcode: this.state.zipcode,
        password: this.state.password,
        fb_id: this.state.fb_id
      });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="login-div">
        <span>
          <img className="coolHog" src={loginHog} />
        </span>
        <form onSubmit={this.createUser}>
          {/* <label>Name:</label> */}
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="name"
            placeholder="First and Last Name"
          />
          {/* <label>Email:</label> */}
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="email"
            placeholder="E-mail Address"
          />
          {/* <label>Zipcode:</label> */}
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="zipcode"
            placeholder="Zip Code"
          />
          {/* <label>Password:</label> */}
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="password"
            placeholder="Password"
          />
          <FormBtn type="submit">Submit</FormBtn>
        </form>
      </div>
    );
  }
}
export default Login;
