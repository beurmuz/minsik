import axios from "axios";
const BASE_URL =
  "https://raw.githubusercontent.com/beurmuz/minsik/main/src/crawlingData/";

export const DataFetchApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
