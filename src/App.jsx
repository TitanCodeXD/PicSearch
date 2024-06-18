// React / Hooks
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import SearchBar from "./components/SearchBar/SearchBar";
import PhotoList from "./components/PhotoList/PhotoList";
import ZoomPhoto from "./components/ZoomPhoto/ZoomPhoto";

//CSS
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");

  const fetchData = async ([query, categoria]) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
      },
    });

    console.log(response);
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, []);

  return (
    <>
      <div className="container">
        <h1>PicSearch</h1>
      </div>
      <p>An images website</p>
      <SearchBar />
      <PhotoList />
      <ZoomPhoto />
      <button>Testing</button>
    </>
  );
}

export default App;
