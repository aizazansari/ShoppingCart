import React, { Component } from 'react';

//stateless functional component so no need for class
const NavBar = ({totalCounters}) => {
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
    </div>
  );
};


export default NavBar;
