import React from "react";
import NavBar from "../Components/NavBar.jsx";
import SideBar2 from "../Components/SideBar2.jsx";
import ExtensionCard from "../Components/ExtensionsCard.jsx";

function Extensions() {
  return (
    <div>
      <NavBar />
      <div className="ProfileWindow">
        <div>
          <SideBar2 />
        </div>
        <div className="CheckLargeContainer">
          <ExtensionCard />
        </div>
      </div>
    </div>
  );
}

export default Extensions;
