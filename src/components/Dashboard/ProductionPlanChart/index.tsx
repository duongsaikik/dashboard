import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { ProductionPlan } from "../../../types";
import CustomDatePicker from "../../common/DatePicker";
import { options } from "./helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ProductionPlanChartProps = {
  data?: ProductionPlan[];
};

const ProductionPlanChart: React.FC<ProductionPlanChartProps> = ({ data }) => {
  const chartData = {
    labels: data?.map((item) => item.name),
    datasets: [
      {
        label: "Kế hoạch",
        data: data?.map((item) => item.plan),
        backgroundColor: "#0375F3",
        barThickness: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#fff",
      },
      {
        label: "Thực hiện",
        data: data?.map((item) => item.actual),
        backgroundColor: "#1FC583",
        barThickness: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="bg-white p-[0_24px_24px_24px] rounded-lg shadow">
      <div className="flex justify-between items-center py-[30px]">
        <h2 className="text-lg font-semibold">Kế Hoạch Sản Xuất</h2>
        <CustomDatePicker placeholder="Quý này" />
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ProductionPlanChart;
