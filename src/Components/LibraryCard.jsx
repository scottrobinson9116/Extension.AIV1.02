import React from "react";

function SearchCard() {
  return (
    <div className="CardContainer">
      <div className="SearchCard">
        <h1 id="CheckTitle">Library</h1>
        <div className="ListBoxTitle">
          <p className="ListTitle">Library</p>
          <p className="ListTitle2">Available Books</p>
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
        <button>Book Set</button>
        <button>Add</button>
        <button>Remove</button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default SearchCard;
