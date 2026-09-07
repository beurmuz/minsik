import axios from "axios";

const BASE_URL =
  "https://raw.githubusercontent.com/beurmuz/minsik/main/src/crawlingData/";

export const DataFetchApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5초 동안 응답 없으면 타임아웃 처리
});

// 응답 인터셉터: CDN 장애 및 통신 에러 예외 처리
DataFetchApi.interceptors.response.use(
  (response) => { return response; },
  (error) => {
    if (error.response) {
      console.error(
        `[CDN Data Fetch Error] Status: ${error.response.status} - 데이터를 불러오는데 실패했습니다.`
      );
    } else if (error.request) {
      console.error(
        "[CDN Network Error] 서버 응답이 없거나 네트워크가 연결되지 않았습니다."
      );
    } else {
      console.error("[CDN Error]", error.message);
    }

    return Promise.resolve({ data: [] });
  }
);