import React from "react";
import ClockCard from "../Components/ClockCard.jsx";
import SideBar2 from "../Components/SideBar.jsx";
import NavBar from "../Components/NavBar.jsx";

function Welcome() {
  return (
    <div>
      <NavBar />
      <div className="ProfileWindow">
        <div>
          <SideBar2 />
        </div>
        <div className="CardContainer">
          <ClockCard />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
