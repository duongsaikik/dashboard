import { ChartOptions } from "chart.js";

export const options: ChartOptions<"bar"> = {
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: true,
    },
  },
  plugins: {
    tooltip: {
      position: "nearest",
      padding: {
        bottom: 0,
        top: 8,
        right: 16,
        left: 16,
      },
      callbacks: {
        label() {
          return "";
        },
        title: (tooltipItems) => {
          const tooltipItem = tooltipItems[0];
          const label = tooltipItem.raw || "";
          return `${label}`;
        },
      },
    },
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
};
