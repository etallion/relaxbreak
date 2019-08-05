import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/admin">
        Admin Console
      </Link>
      <Link className="navbar-brand" to="/admin/personality">
        Personalities
      </Link>
      <Link className="navbar-brand" to="/admin/questions">
        Questions
      </Link>
      <Link className="navbar-brand" to="/admin/users">
        Users
      </Link>
    </nav>
  );
}

export default Nav;
