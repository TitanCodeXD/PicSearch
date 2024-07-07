//Hooks
import React from "react";
import { useState } from "react";

//CSS
import "./SearchBar.css";

const SearchBar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const [loading, setLoading] = useState(false);

  const categorias = ["Nature", "People", "Technology", "Animals", "Sports"];

  //Função para realizar a pesquisa
  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setActivateSearch(true);
    }, 1500);
  };

  //Função para botão de Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for an image..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
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
      <button onClick={handleSearch}>Search</button>

      {loading && <div className="loader"></div>}
    </div>
  );
};

export default SearchBar;
