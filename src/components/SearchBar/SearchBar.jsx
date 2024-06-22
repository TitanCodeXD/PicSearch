//Hooks
import React from "react";

//CSS
import "./SearchBar.css";

const SearchBar = () => {
  const categorias = ["Nature", "People", "Technology", "Animals", "Sports"];

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for an image..." />
      <select>
        {categorias.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
