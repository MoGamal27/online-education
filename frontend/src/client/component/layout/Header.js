import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-menu">
          <div className="logo">
            <Link to="/">
              <img src="/path/to/your/logo.png" alt="DevScope Logo" />
            </Link>
          </div>
          <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
            <li><Link to="/quizzes" onClick={toggleMenu}>Quizzes</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          {isLoggedIn ? (
            <div className="user-profile">
              <img 
                src="/path/to/user/photo.jpg" 
                alt="User" 
                onClick={toggleDropdown}
              />
              <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
                <Link to="/profile" onClick={toggleDropdown}>Dashboard</Link>
                <Link to="/settings" onClick={toggleDropdown}>Settings</Link>
                <button className="sign-out" onClick={handleLogout}>Sign Out</button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;