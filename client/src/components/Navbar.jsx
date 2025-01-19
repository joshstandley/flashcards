import React from 'react';
import { Link } from 'react-router-dom'; // Import React Router's Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          Flashcards
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/decks" className="navbar-link">
            My Decks
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/features" className="navbar-link">
            Features
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
