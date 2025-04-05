import React from "react";
import { Product } from "../../types";
import CustomDatePicker from "../common/DatePicker";
import GrowthIcon from "../common/iconCommon/GrowthIcon";
import DeclineIcon from "../common/iconCommon/DeclineIcon";
import { isEmpty } from "@/common/utils";
import { NO_DATA } from "@/common/constant";

type TopProductsProps = {
  products?: Product[];
};

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  const renderProduct = (product: Product, index: number) => {
    return (
      <div
        key={product?.id || index}
        className="bg-white p-4 rounded-lg shadow flex justify-between min-h-[116px] items-center"
      >
        <div>
          <p className="text-[28px] font-bold text-[#0375F3]">
            {product?.quantity || 0}
          </p>
          <span className="text-[14px] text-[#141522] font-lexend">
            {product?.name || NO_DATA}
          </span>
        </div>
        <p className="text-sm h-full flex items-start justify-center gap-[2px]">
          {product?.id && (
            <>
              {product?.growth ? <GrowthIcon /> : <DeclineIcon />}{" "}
              <span className="text-[14px] font-[500]">
                {product?.growth || product?.decline}%
              </span>
            </>
          )}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Top Sản Phẩm Sản Xuất Nhiều Nhất
        </h2>
        <CustomDatePicker
          placeholder="Tháng này"
          views={["month"]}
          format="MM"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {!isEmpty(products)
          ? products?.map(renderProduct)
          : (Array.from({ length: 5 }) as Product[]).map(renderProduct)}
      </div>
    </div>
  );
};

export default TopProducts;
