# GeoJSON

Generate JSON files from the [countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database).

Files are of the structure:

- /countries.json
- /countries/[iso2_country_code]/states.json
- /countries/[iso2_country_code]/states/[state_code]/cities.json

## Build

```sh
pnpm run build
```

This will generate all required `.json` files in the `dist` folder.

## Run

```sh
pnpm start
```

This will start a local server by default on port `3001` serving the genrated `.json` files in the `dist` folder.
