import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import API from "../utils/API";

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
      <div className="container">
        <form onSubmit={this.createUser}>
          <label>Name:</label>
          <Input onChange={this.handleInputChange} type="text" name="name" />
          <label>Email:</label>
          <Input onChange={this.handleInputChange} type="text" name="email" />
          <label>Zipcode:</label>
          <Input onChange={this.handleInputChange} type="text" name="zipcode" />
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
