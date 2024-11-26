import { useState } from "react";
import "./App.css";
import type { CountryCountResult } from "./functions/get-flight-origin-countries";
import { getFlightOriginCountries } from "./functions/get-flight-origin-countries";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CountryCountResult>([]); // format [ { Thailand: 3 }, { China: 2 } ]

  async function handleButtonClick() {
    setIsLoading(true);

    const { data, error } = await getFlightOriginCountries(searchTerm);
    if (error) {
      setIsLoading(false);
      alert(error);
      return;
    }

    setResult(data);
    setIsLoading(false);
  }

  return (
    <div>
      <h1>Get Origin Countries of Flight Arriving at an Airport</h1>
      <label>
        Enter 3-character Airport Code:
        <br />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? "... is loading" : "Search"}
      </button>
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border text-left">Country</th>
              <th className="p-2 border text-right"># of Flights</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, index) => {
              const country = Object.keys(item)[0];
              const number = item[country];

              return (
                <tr key={index}>
                  <td className="p-2 border">{country}</td>
                  <td className="p-2 border text-right">{number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
