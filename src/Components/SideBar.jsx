import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div id="sideBar">
        <Link to="/Library">
          <button>Library</button>
        </Link>
        <Link to="/Extensions">
          <button>Extensions</button>
        </Link>
        <Link to="/Help">
          <button>Help</button>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
