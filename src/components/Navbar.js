import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../photos/logo.png"
import ShoppingCartIcon from './ShoppingCartIcon'
export const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink className="logo" to="/"><img src={logo} alt='logo'/></NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink className="cart" to="/cart"><ShoppingCartIcon/></NavLink>
    </nav>
  )
}
