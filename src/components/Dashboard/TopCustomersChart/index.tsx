import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Customer } from "../../../types";
import CustomDatePicker from "../../common/DatePicker";
import { options } from "./helpers";
import Container from "@/components/common/Container";

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

  return (
    <Container
      title="Top 5 Khách Hàng Có Số Lượng Nhiều Nhất"
      filter={
        <CustomDatePicker
          placeholder="Năm nay"
          views={["year"]}
          format="YYYY"
        />
      }
    >
      <Bar data={chartData} options={options} />
    </Container>
  );
};

export default TopCustomersChart;
