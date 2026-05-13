import React from "react";

function Search({search,setSearch}) {
  return (
    <div className="searchBar">
      <label htmlFor="search">Search Plants</label>
      <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)}
        />
    </div>
  );
}

export default Search;