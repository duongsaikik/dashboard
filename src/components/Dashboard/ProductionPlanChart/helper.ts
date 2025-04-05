import { ChartOptions } from "chart.js";

export const options: ChartOptions<"bar"> = {
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
          return `${label} cái`;
        },
      },
    },
    legend: {
      labels: {
        pointStyle: "star",
      },
      position: "top",
      align: "end",
    },
    datalabels: {
      display: false,
    },
  },
};
