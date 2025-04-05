import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Customer } from "../../types";
import CustomDatePicker from "../common/DatePicker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type TopCustomersChartProps = {
  data?: Customer[];
};

const TopCustomersChart: React.FC<TopCustomersChartProps> = ({ data }) => {
  const chartData = {
    labels: data?.map((item) => item.name),
    datasets: [
      {
        label: "Số lượng",
        data: data?.map((item) => item.quantity),
        backgroundColor: "#0375F3",
        barThickness: 10,
        borderRadius: 5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-[0_24px_24px_24px] rounded-lg shadow">
      <div className="flex justify-between items-center py-[30px]">
        <h2 className="text-lg font-semibold">
          Top 5 Khách Hàng Có Số Lượng Nhiều Nhất
        </h2>
        <CustomDatePicker
          placeholder="Năm nay"
          views={["year"]}
          format="YYYY"
        />
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TopCustomersChart;
