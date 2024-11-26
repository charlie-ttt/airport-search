const API_KEY = import.meta.env.VITE_API_KEY_FLIGHT_API;

const url = `https://api.flightapi.io/compschedule/${API_KEY}?mode=arrivals`;

// handle fetching data directly from flightAPI
export async function fetchCompschedule(country: string) {
  try {
    const res = await fetch(`${url}&iata=${country}`, {
      method: "GET",
    });
    const data = (await res.json()) as FlightAPIAirportResponse;
    return { data };
  } catch (error) {
    return { error: error as Error };
  }
}

type FlightAPIAirportResponse = {
  airport: {
    pluginData: {
      details: object;
      flightdiary: object;
      schedule: {
        arrivals: {
          item: object;
          page: object;
          timestamp: number;
          data: FlightData[];
        };
      };
    };
  };
};

type FlightData = {
  flight: {
    identification: object;
    status: object;
    aircraft: object;
    owner: string | null;
    airline: object;
    airport: {
      origin: {
        position: {
          country: {
            name: string;
          };
        };
      };
    };
    time: object;
  };
};
