import React from 'react'
import '../style.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return <header className='header'>
    <h1>Reusable Card</h1>
    <nav>
        <NavLink className='navlink' to="/">Solo Reusable Card</NavLink>
        <NavLink className='navlink' to={"/list"}>Reusable Card in List</NavLink>
    </nav>
  </header>
}

export default Header;