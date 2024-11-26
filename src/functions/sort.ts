import type { CountryCountResult } from "./get-flight-origin-countries";

export function sortCountryCountFromHighest(data: CountryCountResult) {
  return [...data].sort((a, b) => {
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];
    return valueB - valueA;
  });
}
