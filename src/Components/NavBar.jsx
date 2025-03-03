import React from "react";
import logo from "../Assets/logoV3.png";
import { Link } from "react-router-dom";

function NavBar() {
  if (!window.location.href.endsWith("/")) {
    return (
      <div className="NavBar">
        <Link to="/">
          <button className="header-text">Extension.AI</button>
        </Link>
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </div>
    );
  } else if (window.location.href.endsWith("/")) {
    return (
      <div className="NavBar">
        <button className="header-text">Extension.AI</button>
        <img className="logo" src={logo} />
      </div>
    );
  }
}

export default NavBar;
