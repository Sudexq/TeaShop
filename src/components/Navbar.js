import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../photos/logo.png";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome'dan ikonları ekliyoruz
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Hamburger menü ikonu

export const Navbar = () => {
  const myFunction = () => {
    const x = document.getElementById("navbar");
    if (x) {
      // Eğer navbar bulunursa
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <NavLink className="logo" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>

      <NavLink className="cart" to="/cart">
        <ShoppingCartIcon />
      </NavLink>

      {/* Font Awesome Hamburger Menüsü */}
      <NavLink to={void 0} onClick={myFunction()} className="hamburger">
        <FontAwesomeIcon icon={faBars} />
      </NavLink>
    </nav>
  );
};
