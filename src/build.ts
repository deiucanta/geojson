import { Country } from "./types";
import fs from "fs/promises";

const PRETTY = false;
const JSON_URL =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json";

const stringify = (obj: any, pretty = PRETTY) => {
  if (pretty) return JSON.stringify(obj, null, 2);
  return JSON.stringify(obj);
};

async function main() {
  const response = await fetch(JSON_URL);
  const json: Country[] = await response.json();

  const countries = json.map((country) => {
    return {
      id: country.id,
      name: country.name,
      iso2: country.iso2,
      native: country.native,
    };
  });
  await fs.mkdir("dist");
  await fs.writeFile("dist/countries.json", stringify(countries));

  await fs.mkdir("dist/countries", { recursive: true });
  for (const country of json) {
    const states = country.states.map((state) => {
      return {
        id: state.id,
        name: state.name,
        state_code: state.state_code,
        type: state.type,
      };
    });
    await fs.mkdir(`dist/countries/${country.iso2}`, { recursive: true });
    await fs.writeFile(
      `dist/countries/${country.iso2}/states.json`,
      stringify(states)
    );

    await fs.mkdir(`dist/countries/${country.iso2}/states`, {
      recursive: true,
    });
    for (const state of country.states) {
      const cities = state.cities.map((city) => {
        return {
          id: city.id,
          name: city.name,
        };
      });

      await fs.mkdir(
        `dist/countries/${country.iso2}/states/${state.state_code}`,
        {
          recursive: true,
        }
      );
      await fs.writeFile(
        `dist/countries/${country.iso2}/states/${state.state_code}/cities.json`,
        stringify(cities)
      );
    }
  }
}

console.log("Starting...");
main()
  .then(() => {
    console.log("Done");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Process finished with error", err);
    process.exit(1);
  });
