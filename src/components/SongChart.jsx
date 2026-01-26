import React, { useMemo } from "react";
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
  Legend,
);

const SongChart = () => {
  const { releaseYears, joinYears } = dataStore((state) => state);

  const { labels, releaseCounts, joinCounts, peakYear, peakTotal } =
    useMemo(() => {
      const releaseMap = new Map(
        (releaseYears ?? []).map(([year, count]) => [
          String(year),
          Number(count),
        ]),
      );
      const joinMap = new Map(
        (joinYears ?? []).map(([year, count]) => [String(year), Number(count)]),
      );

      const yearSet = new Set([...releaseMap.keys(), ...joinMap.keys()]);
      const sortedYears = Array.from(yearSet).sort(
        (a, b) => Number(a) - Number(b),
      );

      const rCounts = sortedYears.map((y) => releaseMap.get(y) ?? 0);
      const jCounts = sortedYears.map((y) => joinMap.get(y) ?? 0);

      let bestYear = null;
      let bestTotal = -1;
      for (let i = 0; i < sortedYears.length; i++) {
        const total = rCounts[i] + jCounts[i];
        if (total > bestTotal) {
          bestTotal = total;
          bestYear = sortedYears[i];
        }
      }

      return {
        labels: sortedYears,
        releaseCounts: rCounts,
        joinCounts: jCounts,
        peakYear: bestYear,
        peakTotal: bestTotal < 0 ? 0 : bestTotal,
      };
    }, [releaseYears, joinYears]);

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
        ticks: {
          autoSkip: true,
          maxRotation: 0,
        },
      },
      y: {
        stacked: false,
        beginAtZero: true,
        ticks: {
          precision: 0,
          maxTicksLimit: 6,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "발매 곡 수",
        data: releaseCounts,
        backgroundColor: "rgba(0, 0, 0, 0.18)",
        borderColor: "rgba(0, 0, 0, 0.75)",
      },
      {
        label: "참여(피처링) 곡 수",
        data: joinCounts,
        backgroundColor: "rgba(0, 0, 0, 0.10)",
        borderColor: "rgba(0, 0, 0, 0.45)",
      },
    ],
  };

  return (
    <div className="py-2">
      {peakYear && (
        <p className="font-Pretendard text-sub-color text-sm mb-3">
          최다 활동 연도: {peakYear}년 (총 {peakTotal}곡)
        </p>
      )}
      <Line options={options} data={data} />
    </div>
  );
};

export default SongChart;
