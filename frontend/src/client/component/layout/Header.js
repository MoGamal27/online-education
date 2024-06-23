import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container-fluid py-3">
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-md-3">
            <Link to="/" className="navbar-brand">
              <img src="/path/to/logo.svg" alt="Logo" className="img-fluid logo" />
            </Link>
          </div>

          {/* Toggle Button (for mobile) - Removed as styling is handled in CSS */}

          {/* Navigation (collapse on mobile) */}
          <div className="col-md-12 mt-3 mt-md-0">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link register-link">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
