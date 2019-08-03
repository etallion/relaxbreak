import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  createUser = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.saveUser({
        email: this.state.email,
        password: this.state.password
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
        <form onSubmit={this.createUser}>
          <label>Email:</label>
          <Input onChange={this.handleInputChange} type="text" name="email" />
          <label>Password:</label>
          <Input
            onChange={this.handleInputChange}
            type="text"
            name="password"
          />
          <FormBtn type="submit">Submit</FormBtn>
        </form>
      </div>
    );
  }
}
export default Login;
