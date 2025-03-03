import React from "react";
import Copyright from "./Components/Copyright.jsx";
import BackgroundImage from "./Components/BackgroundImage.jsx";
import Library from "./Pages/Library.jsx";
import Extensions from "./Pages/Extensions.jsx";
import Help from "./Pages/Help.jsx";
import Welcome from "./Pages/Welcome.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Extensions" element={<Extensions />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
