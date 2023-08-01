import axios from "axios";
// const BASE_URL = "https://github.com/beurmuz/minsik/blob/main/src/crawlingData/";

export const songsApi = axios.create({
  baseURL:
    "https://github.com/beurmuz/minsik/blob/main/src/crawlingData/songs_data.json",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

export const newsApi = axios.create({
  baseURL: "https://github.com/beurmuz/minsik/blob/main/src/crawlingData/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
    "Access-Control-Allow-Credentials": "true",
  },
});
