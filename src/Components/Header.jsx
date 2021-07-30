import React from 'react';
import logo from '../logo.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="container">
      <img src={logo} className="" width="150px" alt="logo" />
      <p style={{ fontSize: '16px', Color: '#c7c7c7' }}>
        {' '}
        <FaPhoneAlt /> +123445667895 {' | '} <MdEmail /> example@gmail.com
      </p>

      <ul className="dropdown-backdrop">
        <li>
          <NavLink
            to="/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
