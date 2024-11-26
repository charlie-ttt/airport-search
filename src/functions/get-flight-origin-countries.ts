import { fetchCompschedule } from "./fetch";

// fetch API and convert to desired data format
export async function getFlightOriginCountries(fromCountry: string) {
  const { data, error } = await fetchCompschedule(fromCountry);
  if (error) return { data: [], error: "failed to fetch: " + error.message };

  const countryListArr: string[] = [];

  for (const airportData of data) {
    airportData.airport.pluginData.schedule.arrivals.data.forEach(
      ({ flight }) => {
        countryListArr.push(flight.airport.origin.position.country.name);
      }
    );
  }

  return { data: countCountriesWithMap(countryListArr) };
}

// format the output into CountryCountResult format: [ { Thailand: 3 }, { China: 2 }, { USA: 1 } ]
function countCountriesWithMap(countries: string[]): CountryCountResult {
  const countryMap = new Map();

  for (const country of countries) {
    if (countryMap.has(country)) {
      countryMap.set(country, countryMap.get(country) + 1);
    } else {
      countryMap.set(country, 1);
    }
  }

  // format the data into normal js array
  const result = [];
  for (const [country, count] of countryMap) {
    result.push({ [country]: count });
  }

  return result;
}

export type CountryCountResult = {
  [x: string]: number;
}[];
