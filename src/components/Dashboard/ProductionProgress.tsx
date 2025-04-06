import React from "react";
import { ProductionProgressData } from "../../types";
import CustomSelect from "../common/Select";
import { isEmpty } from "@/common/utils";
import { NO_DATA } from "@/common/constant";
import Container from "../common/Container";

type ProductionProgressProps = {
  data?: ProductionProgressData[];
};

const ProductionProgress: React.FC<ProductionProgressProps> = ({ data }) => {
  const renderProduct = (item: ProductionProgressData, index: number) => (
    <div key={item?.id || index}>
      <div className="flex justify-between">
        <p className="text-[14px] font-[500]">{item?.name || NO_DATA}</p>
        <div className="flex flex-row mb-[8px]">
          <p className="text-sm text-primary">
            {item?.amount || "-"} {item?.type || ""}&nbsp;
          </p>
          <p className="text-sm text-[#637381]">
            {item?.progress ? `(${item?.progress}%)` : ""}
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#1FC583] h-2.5 rounded-full"
          style={{ width: `${item?.progress || 0}%` }}
        />
      </div>
    </div>
  );

  return (
    <Container
      title="Tiến Độ Sản Xuất Theo Nhóm"
      filter={
        <CustomSelect
          options={[
            {
              label: "Hoàn thành",
              value: "competed",
            },
          ]}
        />
      }
    >
      <div className="flex flex-col gap-[32px]">
        {!isEmpty(data)
          ? data?.map(renderProduct)
          : (Array.from({ length: 7 }) as ProductionProgressData[]).map(
              renderProduct
            )}
      </div>
    </Container>
  );
};

export default ProductionProgress;
