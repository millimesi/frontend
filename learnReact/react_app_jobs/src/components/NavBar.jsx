import React from 'react';
import reactLogo from '../assets/react.svg';
import './navBar.css';

const NavBar = () => {
  return (
    <nav>
        <img className='Nav_logo' src= {reactLogo} alt="react logo" />
        <h1 className='Nav_titel_name'>React Jobs</h1>
        <ul className='Nav_list'>
            <li><a href='#'> Home</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Add Jobs</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
