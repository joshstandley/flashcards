import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Flashcards</div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">Home</li>
        <li className="navbar-menu-item">Features</li>
        <li className="navbar-menu-item">About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
