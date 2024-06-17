// React / Hooks
import { useState, useEffect } from "react";

//Components
import SearchBar from "./components/SearchBar/SearchBar";
import PhotoList from "./components/PhotoList/PhotoList";
import ZoomPhoto from "./components/ZoomPhoto/ZoomPhoto";

//CSS
import "./App.css";

function App() {
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
