import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'aliceblue'
    };

  return (
      <nav className ="nav">
          <h3 className ="logo">
          <img src="Logo_GP.jpeg" alt="" className ="logo"/>
          </h3>
          <ul className ="nav-links">
              <Link style ={navStyle} to='/'>
                <li>Home</li>
              </Link >

              <Link style ={navStyle} to ='/about'>
                <li>About</li>
              </Link>

              <Link style ={navStyle} to = '/games'>
                <li>Games</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
