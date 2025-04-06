import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { ProductionStatus } from "@/types";
import CustomDatePicker from "../../common/DatePicker";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  centerTextPlugin,
  chartData,
  fixedSegmentsPlugin,
  options,
  ProductStatus,
  status,
} from "./helpers";
import { cn, isEmpty } from "@/common/utils";
import Container from "@/components/common/Container";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type ProductionStatusChartProps = {
  data?: ProductionStatus;
};

const ProductionStatusChart: React.FC<ProductionStatusChartProps> = ({
  data,
}) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.plugins = [centerTextPlugin(data)];
    }
  }, []);

  const renderStatus = (status: ProductStatus) => {
    return (
      <div
        key={status.label}
        className="min-w-[176px] w-full xl:w-[176px] flex items-start flex-col border-[1px] border-[#DDDDE2] rounded-[8px] p-[8px]"
      >
        <span className={cn("text-[24px] font-[600]", status.color)}>
          {status.data}
        </span>
        <span className="text-[14px]">{status.label}</span>
      </div>
    );
  };

  return (
    <Container
      title="Tình Hình Sản Xuất"
      filter={<CustomDatePicker placeholder="Hôm nay" />}
    >
      <Doughnut
        ref={chartRef}
        data={chartData(data)}
        options={options}
        plugins={[centerTextPlugin(data)].concat(
          !isEmpty(data) ? [] : [fixedSegmentsPlugin]
        )}
        className="!w-full lg:!size-[268px] mx-auto my-[20px] lg:my-[67px]"
      />
      <div className="flex justify-around flex-wrap text-sm gap-[4px]">
        {status(data)?.map(renderStatus)}
      </div>
    </Container>
  );
};

export default ProductionStatusChart;
