import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../../assets/img/logo.png";
import img2 from "../../assets/img/Group 1000001807.png";
import "./Nav.css";

const Nav = ({ backgroundImage, h1 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 0;

    if (scrollPosition > threshold && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollPosition <= threshold && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActivePage("Home");
    } else if (path === "/About") {
      setActivePage("About");
    } else if (path === "/Packages") {
      setActivePage("Packages");
    } else if (path === "/services") {
      setActivePage("Services");
    }
  }, [location]);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div
        className="bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className={`content ${isMenuOpen && "nav--open"}`}
          style={{ backgroundColor: isScrolled ? "#FFF" : "transparent" }}
        >
          <img src={isScrolled ? img2 : img1} alt="logo" className="logo" />
          <nav className={isMenuOpen ? "nav--open" : ""}>
            <ul className="list">
              <li className={`item ${activePage === "Home" && "active"}`}>
                <Link
                  to="/"
                  className="link"
                  style={{ color: isScrolled ? "#000" : "#FFF" }}
                  onClick={() => handleNavLinkClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li className={`item ${activePage === "About" && "active"}`}>
                <Link
                  to="/About"
                  className="link"
                  style={{ color: isScrolled ? "#000" : "#FFF" }}
                  onClick={() => handleNavLinkClick("About")}
                >
                  About
                </Link>
              </li>
              <li className={`item ${activePage === "Packages" && "active"}`}>
                <Link
                  to="/Packages"
                  className="link"
                  style={{ color: isScrolled ? "#000" : "#FFF" }}
                  onClick={() => handleNavLinkClick("Packages")}
                >
                  Packages
                </Link>
              </li>
              <li className={`item ${activePage === "Services" && "active"}`}>
                <Link
                  to="/services"
                  className="link"
                  style={{ color: isScrolled ? "#000" : "#FFF" }}
                  onClick={() => handleNavLinkClick("Services")}
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>
          <div className="both">
            <button className="item">
              <a href="" className="link">
                Get in Touch
              </a>
            </button>
            <div
              className={`hamburger ${isMenuOpen ? "hamburger--open" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="hero">
          <h1>{h1}</h1>
        </div>
      </div>
    </header>
  );
};

export default Nav;
