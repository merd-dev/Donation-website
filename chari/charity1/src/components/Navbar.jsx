import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../css/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Nile Care Logo" className="logo" />
        <span className="company-name">Nile Care</span>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line1" : ""}`}></div>
        <div className={`line ${isOpen ? "line2" : ""}`}></div>
        <div className={`line ${isOpen ? "line3" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/donate">Donation</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        {/* <li>
          <Link to="/news">News</Link>
        </li> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
