/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_FIREBASE_STORAGE_TOKEN?: string;
    REACT_APP_FIREBASE_STORAGE_URL?: string;
    REACT_APP_FIREBASE_HOSTING_URL?: string;
  }
}
