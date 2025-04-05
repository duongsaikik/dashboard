import { isEmpty } from "@/common/utils";
import { ProductionStatus } from "@/types";
import { ChartData, ChartOptions } from "chart.js";

export const chartData = (data?: ProductionStatus) => {
  return {
    labels: ["Chưa hoàn thành", "Đang sản xuất", "Hoàn thành"],
    datasets: [
      {
        data: [
          data?.completed?.progress || 0,
          data?.inProgress?.progress || 0,
          data?.pending?.progress || 0,
        ], // Percentages
        backgroundColor: isEmpty(data)
          ? ["#DADFE4", "#DADFE4", "#DADFE4"]
          : ["#FF8C00", "#00C4B4", "#1E90FF"],
        borderWidth: 0,
      },
    ],
  };
};

export const options: ChartOptions<"doughnut"> = {
  cutout: "75%",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#000",
      formatter: (value: number) => (isEmpty(value) ? "" : `${value}%`),
      font: {
        size: 16,
        weight: "bold",
      },
    },
  },
};

export const centerTextPlugin = (data?: ProductionStatus) => {
  return {
    id: "centerText",
    beforeDraw: (chart: any) => {
      const { ctx, chartArea } = chart;
      const { width, height } = chartArea;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const centerX = width / 2 + chartArea.left;
      const centerY = height / 2 + chartArea.top;

      const actual =
        (data?.completed?.amount || 0) +
        (data?.inProgress?.amount || 0) +
        (data?.pending?.amount || 0);

      // Draw "16"
      ctx.font = "bold 40px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText(actual, centerX, centerY - 10);

      // Draw below "16"
      ctx.font = "14px Arial";
      ctx.fillText("Lệnh sản xuất", centerX, centerY + 20);

      ctx.restore();
    },
  };
};

export type ProductStatus = {
  data: number;
  label: string;
  color: string;
};

export const status = (data?: ProductionStatus) => [
  {
    data: data?.pending?.amount || 0,
    label: "Chưa hoàn thành",
    color: "text-[#FF8F0D]",
  },
  {
    data: data?.inProgress?.amount || 0,
    label: "Đang sản xuất",
    color: "text-[#0375F3]",
  },
  {
    data: data?.completed?.amount || 0,
    label: "Hoàn thành",
    color: "text-[#1FC583]",
  },
];

export const fixedSegmentsPlugin = {
  id: "fixedSegments",
  beforeDraw(chart: any) {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);
    const arcs = meta.data;

    const total = chart.data.datasets[0].data.reduce(
      (sum: number, value: number) => sum + (value || 0),
      0
    );

    // If total is 0, set equal angles for all segments
    if (total === 0) {
      const segmentAngle = (2 * Math.PI) / arcs.length; // Equal angle for each segment
      let startAngle = -Math.PI / 2; // Start at the top

      ctx.save();
      arcs.forEach((arc: any, index: number) => {
        const endAngle = startAngle + segmentAngle;

        // Draw the placeholder segment
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.outerRadius, startAngle, endAngle);
        ctx.arc(arc.x, arc.y, arc.innerRadius, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = "#D3D3D3"; // Gray color for placeholder segments
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();

        startAngle = endAngle;
      });
      ctx.restore();
    } else {
      // Adjust segments with 0 value to have a minimum angle
      let startAngle = -Math.PI / 2;
      const nonZeroTotal = chart.data.datasets[0].data
        .filter((value: number) => value > 0)
        .reduce((sum: number, value: number) => sum + value, 0);
      const minAngle = (2 * Math.PI) / arcs.length / 10; // Minimum angle for 0-value segments

      arcs.forEach((arc: any, index: number) => {
        const value = chart.data.datasets[0].data[index];
        if (value === 0) {
          arc.startAngle = startAngle;
          arc.endAngle = startAngle + minAngle;
          arc.options.backgroundColor = "#D3D3D3"; // Gray color for 0-value segments
          startAngle += minAngle;
        } else {
          const proportion = value / nonZeroTotal;
          const angle =
            proportion *
            (2 * Math.PI -
              minAngle * (arcs.length - (nonZeroTotal > 0 ? 1 : 0)));
          arc.startAngle = startAngle;
          arc.endAngle = startAngle + angle;
          startAngle += angle;
        }
      });
    }
  },
};
