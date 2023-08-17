import React, { useRef } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import makeChart from "../utils/makeChart";
import { songsStore } from "../shared/store";

const { releaseSongs, joinSongs } = songsStore((state) => state);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y", // Horizontal Bar Chart
  responsive: true,
  animation: {
    duration: 500,
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "연도별 곡 수",
      fontsize: 30,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
const data1 = [100, 20, 130, 150, 200, 210, 40];
const data2 = [100, 60, 200, 100, 50, 100, 100];

export const data = {
  labels,
  datasets: [
    // array의 object로 들어간다.
    {
      label: "발매 수", // 데이터가 가리키고 있는 전체 영역의 Label
      data: data1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      // backgroundColor: ['red', 'blue', 'yellow'],
      hoverBackgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "피처링 수",
      data: data2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const MusicChart = (props) => {
  // rsi
  return (
    <div class="p-10">
      <Bar options={options} data={data} />
    </div>
  );
};
