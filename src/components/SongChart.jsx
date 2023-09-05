import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { dataStore } from "../shared/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SongChart = () => {
  const { releaseYears, joinYears } = dataStore((state) => state);

  const options = {
    responsive: true,
    animation: {
      duration: 500,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };

  const labels = releaseYears.sort().map((year) => year[0]);

  const data = {
    labels,
    datasets: [
      {
        label: "발매 수",
        data: releaseYears.map((year) => year[1]),
        backgroundColor: "rgba(224, 114, 182, 0.8)",
        borderColor: "rgb(244, 114, 182)",
      },
      {
        label: "참여(피처링) 수",
        data: joinYears.map((year) => year[1]),
        backgroundColor: "rgba(251, 191, 36, 0.8)",
        borderColor: "rgb(251, 191, 36)",
      },
    ],
  };

  return (
    <div className="px-10 py-5 w-screen">
      <div className="w-full mb-3 flex flex-row justify-between">
        <p className="font-Pretendard text-main-blue/80 text-xl font-bold">
          연도별 활동 내역
        </p>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default SongChart;
