import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
 
      <nav className= "navbar scroll" >
        <a href="" className="navbar-brand">
          <span>Turismo</span> <span className="ecuador"></span>
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Dónde ir
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Qué hacer
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Qué comer
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </nav>
  
  );
};
export default Navbar;
