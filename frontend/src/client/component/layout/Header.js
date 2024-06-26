import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState('en');

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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
    setSidebarOpen(false);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-menu">
            <div className="logo" onClick={toggleSidebar}>
              <img src="/path/to/your/logo.png" alt="DevScope Logo" />
            </div>
            <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <i className="fas fa-search"></i>
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

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
     <button className="close-sidebar" onClick={() => closeSidebar()}>
  <FontAwesomeIcon icon={faTimes} />
</button>
        <div className="sidebar-content">
          <div className="user-info">
            <img src="/path/to/user/photo.jpg" alt="User" />
            <h3>User Name</h3>
            <p>user@example.com</p>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <i className="fas fa-tachometer-alt"></i>
                <Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link>
              </li>
              <li>
                <i className="fas fa-graduation-cap"></i>
                <Link to="/my-courses" onClick={closeSidebar}>My Courses</Link>
              </li>
              <li>
                <i className="fas fa-clipboard-list"></i>
                <Link to="/past-quizzes" onClick={closeSidebar}>Past Quizzes</Link>
              </li>
              <li>
                <i className="fas fa-cog"></i>
                <Link to="/settings" onClick={closeSidebar}>Settings</Link>
              </li>
              <li>
                <i className="fas fa-sign-out-alt"></i>
                <button onClick={() => { handleLogout(); closeSidebar(); }}>Sign Out</button>
              </li>
            </ul>
          </nav>
          <div className="language-selector">
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;