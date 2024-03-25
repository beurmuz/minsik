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
      duration: 300,
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
        backgroundColor: "rgba(60, 170, 232, 0.8)",
        borderColor: "rgb(60, 179, 232)",
      },
      {
        label: "참여(피처링) 수",
        data: joinYears.map((year) => year[1]),
        backgroundColor: "rgba(37, 126, 190, 0.8)",
        borderColor: "rgb(37, 126, 190)",
      },
    ],
  };

  return (
    <section className="px-10 py-5 w-screen animate-pageLoadEffect">
      <article className="w-full mb-3 flex flex-row justify-between">
        <p className="font-Pretendard text-main-blue/80 text-xl font-bold">
          연도별 활동 내역
        </p>
      </article>
      <Line options={options} data={data} />
    </section>
  );
};

export default SongChart;
