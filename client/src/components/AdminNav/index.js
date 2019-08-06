import React from "react";
import { Link } from 'react-router-dom';
import './adminNav.css';

function AdminNav() {
  return (
    <nav className="navbar navbar-expand-lg adminNav">
      <Link className="adminNavItem" to="/admin">
        Admin Console
      </Link>
      <Link className="adminNavItem" to="/admin/personality">
        Personalities
      </Link>
      <Link className="adminNavItem" to="/admin/questions">
        Questions
      </Link>
      <Link className="adminNavItem" to="/admin/users">
        Users
      </Link>
    </nav>
  );
}

export default AdminNav;
