import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">Conductor</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/teacher" className="nav-link">Teacher</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/students" className="nav-link">Students</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;