import React from "react";
import NavBar from "../Components/NavBar.jsx";
import SideBar2 from "../Components/SideBar2.jsx";
import HelpCard from "../Components/HelpCard.jsx";

function Help() {
  return (
    <div>
      <NavBar />
      <div className="ProfileWindow">
        <div>
          <SideBar2 />
        </div>
        <div className="MemberContainer">
          <HelpCard />
        </div>
      </div>
    </div>
  );
}

export default Help;
