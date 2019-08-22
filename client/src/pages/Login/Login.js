import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { set } from "mongoose";

class Login extends Component {
  state = {
    name: "",
    email: "",
    zipcode: 0,
    password: "",
    fb_id: "",
    showModal: false,
    loggedIn: false
  };

  loginUser = event => {
    event.preventDefault();
    API.signIn({email: this.state.email, password: this.state.password})
      .then(res => {
        console.log("Logged In:::")
        console.log(res);
        if(res.data.status === 200){
          toast.success("Welcome back, " + res.data.name + "!");
          this.props.setAuth({name: res.data.name, auth: true, zipcode: res.data.zipcode, location: res.data.location});
          setTimeout(() => this.setState({loggedIn: true}), 2000);
        } else if (res.data.status === 400) {
          toast.error("Hmmm... something wasn't correct. Try again.");
        }
        toast.update(res.statusText);
      })
      .catch(err => toast.error("Houston, we have a problem ", err.message));
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
      })
      .then(res => {
        toast.success("Created New User");
        this.setState({showModal: false});
      })
      .catch(err => toast.error(err.message));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if(this.state.loggedIn === true) {
      return <Redirect to='/' />
    }

    return (
      <>
        
        <ToastContainer />
        <div className="login-div">
          <Link to="/">
            <img
              id="coolHog"
              src="https://maxrelax.s3.amazonaws.com/gifs/coolHog.png"
            />
          </Link>
          <form onSubmit={this.loginUser}>
            <label>Email:</label>
            <Input onChange={this.handleInputChange} type="text" name="email" />
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
