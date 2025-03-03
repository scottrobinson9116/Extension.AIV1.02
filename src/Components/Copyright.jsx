import React from "react";

function Copyright() {
  var date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {date} by Extension.AI LLC</p>
    </footer>
  );
}

export default Copyright;
