import React from "react";

function ExtensionCard() {
  return (
    <div className="CardContainer">
      <div className="SearchCard">
        <h1 id="CheckTitle">Extensions</h1>
        <div className="ListBoxTitle">
          <p className="ListTitle3">Active/Inactive</p>
        </div>
        <div className="Lists">
          <div className="ListBox">
            <select className="ListBox1" multiple size="10"></select>
          </div>
          <div className="ListBox">
            <select className="ListBox2" multiple size="10"></select>
          </div>
        </div>
      </div>
      <div className="SearchOptions">
        <button>Add</button>
        <button>Remove</button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default ExtensionCard;
