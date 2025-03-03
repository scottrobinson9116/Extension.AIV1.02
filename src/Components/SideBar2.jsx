import React from "react";
import { Link } from "react-router-dom";

function SideBar2() {
  if (window.location.href.includes("/Library")) {
    return (
      <div>
        <div id="sideBar2">
          <Link to="/Library">
            <button className="Search" style={{ color: "white" }}>
              Library
            </button>
          </Link>
          <Link to="/Extensions">
            <button className="CheckInOut">Extensions </button>
          </Link>
          <Link to="/Help">
            <button className="AddMember">Help </button>
          </Link>
        </div>
      </div>
    );
  } else if (window.location.href.includes("/Extensions")) {
    return (
      <div>
        <div id="sideBar2">
          <Link to="/Library">
            <button id="search">Library </button>
          </Link>
          <Link to="/Extensions">
            <button style={{ color: "white" }}>Extensions </button>
          </Link>
          <Link to="/Help">
            <button>Help </button>
          </Link>
        </div>
      </div>
    );
  } else if (window.location.href.includes("/Help")) {
    return (
      <div>
        <div id="sideBar2">
          <Link to="/Library">
            <button id="search">Library </button>
          </Link>
          <Link to="/Extensions">
            <button>Extensions </button>
          </Link>
          <Link to="/Help">
            <button style={{ color: "white" }}>Help </button>
          </Link>
          <Link to="/">
            <button>Sign Out </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBar2;
