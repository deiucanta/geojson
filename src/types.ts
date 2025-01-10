interface City {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface State {
  id: number;
  name: string;
  state_code: string;
  latitude: string;
  longitude: string;
  type: string;
  cities: City[];
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}
interface Translations {
  [generateKeyPairSync: string]: string;
}

interface Country {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phoneccode: string;
  capital: string;
  currency: string;
  currency_name: string;
  currecy_symbol: string;
  tld: string;
  native: string;
  region: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: Timezone[];
  translations: Translations;
  latitude: string;
  longitude: string;
  states: State[];
}

export { Country, State, City, Timezone, Translations };
