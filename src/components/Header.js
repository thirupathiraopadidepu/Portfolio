import React from "react";
import "./Header.css"; // Import CSS file for Header

const Header = () => {
  return (
    <header>
      <nav className="navigation-bar">
        <div className="logo">THIRUPATHI</div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
