import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>PicSearch</h1>
      </div>
      <p>An images website</p>
      <button>Testing</button>
    </>
  );
}

export default App;
