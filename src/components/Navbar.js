import React, {useState}from "react";
import { NavLink } from "react-router-dom";
import logo from "../photos/logo.png";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome'dan ikonları ekliyoruz
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Hamburger menü ikonu

export const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false); // Responsive state'i

  const toggleMenu = () => {
    setIsResponsive(!isResponsive); // Tıkladıkça menüyü açıp kapatır
  };

  return (
    <nav className={`navbar ${isResponsive ? "navbar-responsive" : ""}`}>
      <div className="navbar-content">
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        <div
          className={`nav-links ${isResponsive ? "nav-links-responsive" : ""}`}
        >
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={toggleMenu}>
            Products
          </NavLink>
        </div>

        <NavLink className="cart" to="/cart">
          <ShoppingCartIcon />
        </NavLink>

        {/* Font Awesome Hamburger Menüsü */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};
