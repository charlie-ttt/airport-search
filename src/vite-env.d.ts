/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY_FLIGHT_API: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
