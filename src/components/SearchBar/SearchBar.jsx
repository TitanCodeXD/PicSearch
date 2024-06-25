//Hooks
import React from "react";

//CSS
import "./SearchBar.css";

const SearchBar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const categorias = ["Nature", "People", "Technology", "Animals", "Sports"];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for an image..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        onChange={(e) => {
          setCategoria(e.target.value);
          setActivateSearch(true);
        }}
      >
        {categorias.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setActivateSearch(true)}>Search</button>
    </div>
  );
};

export default SearchBar;
