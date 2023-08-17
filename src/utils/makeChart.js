// import { songsStore } from "../shared/store";

export const clssifyByYear = (songsData) => {
  let years = new Map();

  for (let song of songsData) {
    let year = song.release.split(".")[0];
    if (!years.has(year)) years.set(year, 1);
    else years.set(year, years.get(year) + 1);
  }

  // 배열로 만들기
  let yearList = [];
  for (let [year, count] of years.entries()) {
    yearList.push([year, count]);
  }

  return yearList.sort((a, b) => a[0] - b[0]);
};

export const countByYear = (songsData) => {
  let years = new Map();

  for (let song of songsData) {
    let year = song.release.split(".")[0];
    if (!years.has(year)) years.set(year, 1);
    else years.set(year, years.get(year) + 1);
  }

  // 배열로 만들기
  let yearList = [];
  for (let [year, count] of years.entries()) {
    yearList.push(year);
  }

  return yearList.sort((a, b) => a[0] - b[0]);
};
