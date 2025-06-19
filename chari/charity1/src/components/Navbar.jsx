import { useState } from "react";
// import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../css/navbar.css";

export default function Navbar() {
  // const { i18n } = useTranslation();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // RTL for Arabic
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Nile Care Logo" className="logo" />
          <span className="company-name text-primary">Nile Care</span>
        </div>

        <ul className="nav-links desktop">
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
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Toggler - visible on small screens */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>
      </div>

      {/* Mobile Navigation - appears when toggler is clicked */}
      <ul className={`nav-links mobile ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleNavbar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleNavbar}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/donate" onClick={toggleNavbar}>
            Donation
          </Link>
        </li>
        <li>
          <Link to="/service" onClick={toggleNavbar}>
            Service
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={toggleNavbar}>
            News
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleNavbar}>
            Contact
          </Link>
        </li>
      </ul>
      {/* <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="form-select"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
        <option value="om">Afan Oromo</option>
        <option value="am">አማርኛ</option>
      </select> */}
    </nav>
  );
}
