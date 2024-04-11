import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>

      <input type="checkbox" id="darkMode" />
      <div className="header container flex">
        <div className="flex logo">
          <div className="joti-one-regular">Kabindra</div>
          <div>Full Stack Developer</div>
        </div>

        <label htmlFor="hamburgerMenu">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburgerMenu" />

        <div className="menu">
          <ul className="flex navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
