import React from "react";
import SideBar2 from "../Components/SideBar2.jsx";
import NavBar from "../Components/NavBar.jsx";
import LibraryCard from "../Components/LibraryCard.jsx";

function Library() {
  return (
    <div>
      <NavBar />
      <div className="ProfileWindow">
        <div>
          <SideBar2 />
        </div>
        <div className="CheckLargeContainer">
          <LibraryCard />
        </div>
      </div>
    </div>
  );
}

export default Library;
