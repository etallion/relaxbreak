import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <List>
          {this.state.users.map(user => (
            <ListItem key={user._id}>
              <h1>Name: {user.name}</h1>
              <h2>Email: {user.email}</h2>
              <ul>
                <li>ZipCode: {user.zipcode}</li>
                <li>Password: {user.password}</li>
                <li>FB: {user.fb_id}</li>
              </ul>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Users;
