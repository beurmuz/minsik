import React from "react";
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
};

const labels = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];
const data1 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const data2 = [700, 600, 500, 400, 300, 200, 100];

export const data = {
  labels,
  datasets: [
    // array의 object로 들어간다.
    {
      label: "Dataset 1", // 데이터가 가리키고 있는 전체 영역의 Label
      data: data1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      // backgroundColor: ['red', 'blue', 'yellow'],
      hoverBackgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => 300),
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

export const MusicChart = (props) => {
  // rsi
  return (
    <div class='p-10'>
      <Bar options={options} data={data} />
    </div>
  );
};
