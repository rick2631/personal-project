import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">RICHARZ</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#section-1">Presentación</a></li>
        <li className="nav-item"><a href="#section-2">About Me</a></li>
        <li className="nav-item"><a href="#section-3">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
