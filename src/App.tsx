import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleButtonClick() {
    console.log(searchTerm);
  }

  return (
    <div>
      <h1>Get Origin Countries of Flight Arriving at an Airport</h1>
      <label>
        Enter 3-character Airport Code:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <div>
        <button type="button" onClick={handleButtonClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
