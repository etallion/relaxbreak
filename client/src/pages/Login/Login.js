import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    name: "",
    email: "",
    zipcode: 0,
    password: "",
    fb_id: "",
    showModal: false
  };

  loginUser = event => {
    event.preventDefault();
    console.log("I will log you in (but not really...)");
  };

  showCreateModal = event => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  hideCreateModal = event => {
    event.preventDefault();
    this.setState({ showModal: false });
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
      <>
        <div className="login-div">
          <Link to="/">
            <img
              id="coolHog"
              src="https://maxrelax.s3.amazonaws.com/gifs/coolHog.png"
            />
          </Link>
          <form onSubmit={this.loginUser}>
            <label>Name:</label>
            <Input onChange={this.handleInputChange} type="text" name="name" />
            <label>Password:</label>
            <Input
              onChange={this.handleInputChange}
              type="password"
              name="password"
            />
            <FormBtn type="submit">Login</FormBtn>
          </form>
          <FormBtn onClick={this.showCreateModal}>Create New User</FormBtn>
        </div>
        <div
          className={
            this.state.showModal
              ? "container display-block"
              : "container display-none"
          }
        >
          <form onSubmit={this.createUser}>
            <label>Name:</label>
            <Input onChange={this.handleInputChange} type="text" name="name" />
            <label>Email:</label>
            <Input onChange={this.handleInputChange} type="text" name="email" />
            <label>Zipcode:</label>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="zipcode"
            />
            <label>Password:</label>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="password"
            />
            <FormBtn type="submit">Submit</FormBtn>
            <FormBtn onClick={this.hideCreateModal}>Cancel</FormBtn>
          </form>
        </div>
      </>
    );
  }
}
export default Login;
