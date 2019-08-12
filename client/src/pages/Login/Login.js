import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const loginHog = require("../../Images/Hedgehogs/coolHog.png");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

class Login extends Component {
  state = {
    name: "",
    password: "",
    newName: "",
    newEmail: "",
    newZipcode: "",
    newPassword: "",
    passwordCheck: "",
    fb_id: "",
    showModal: false
  };

  loginUser = event => {
    event.preventDefault();
    API.getUser(this.state.name).then(res => {
      console.log(res);
    });
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
    if (this.state.newPassword === this.state.passwordCheck) {
      //bcrypt.hash(this.state.password, saltRounds, function(err, hash) {
      if (this.state.newName && this.state.newEmail && this.state.newPassword) {
        API.saveUser({
          name: this.state.newName,
          email: this.state.newEmail,
          zipcode: this.state.newZipcode,
          password: this.state.newPassword,
          fb_id: this.state.fb_id
        })
          .catch(err => {
            console.log(err);
            toast.error("Unable to create user", err.response);
          })
          .then(() => {
            toast.success("User successfully created");
            this.setState({
              name: "",
              password: "",
              newName: "",
              newEmail: "",
              newZipcode: "",
              newPassword: "",
              passwordCheck: "",
              fb_id: "",
              showModal: false
            });
          });
      } else toast.error("at least name, email and password are required.");
    } else toast.error("Your passwords don't match up.");
    //});
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
        <ToastContainer />
        <span>
          <Link to="/">
            <img className="coolHog" src={loginHog} />
          </Link>
        </span>
        <form onSubmit={this.loginUser}>
          <label>Name:</label>
          <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
          />
          <label>Password:</label>
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            name="password"
          />
          <FormBtn type="submit">Login</FormBtn>
        </form>
        <FormBtn onClick={this.showCreateModal}>Create New User</FormBtn>

        <div
          className={
            this.state.showModal
              ? "modal createUser-modal container display-block"
              : "modal createUser-modal container display-none"
          }
        >
          <form onSubmit={this.createUser}>
            <label>Name: (required)</label>
            <Input
              value={this.state.newName}
              onChange={this.handleInputChange}
              type="text"
              name="newName"
            />
            <label>Email: (required)</label>
            <Input
              value={this.state.newEmail}
              onChange={this.handleInputChange}
              type="text"
              name="newEmail"
            />
            <label>Zipcode:</label>
            <Input
              value={this.state.newZipcode}
              onChange={this.handleInputChange}
              type="text"
              name="newZipcode"
            />
            <label>Password: (required)</label>
            <Input
              value={this.state.newPassword}
              onChange={this.handleInputChange}
              type="password"
              name="newPassword"
            />
            <label>Re-enter Password: (required)</label>
            <Input
              value={this.state.passwordCheck}
              onChange={this.handleInputChange}
              type="password"
              name="passwordCheck"
            />
            <FormBtn type="submit">Submit</FormBtn>
            <FormBtn onClick={this.hideCreateModal}>Cancel</FormBtn>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
