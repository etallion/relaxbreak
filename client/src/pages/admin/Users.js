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
              <h1>{user.email}</h1>
              <h2>{user.password}</h2>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Users;
