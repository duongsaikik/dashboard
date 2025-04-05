import { cn, isEmpty } from "@/common/utils";
import React from "react";
import { v4 as uuid } from "uuid";
import { Material } from "../../types";
import MuiDatePicker from "../common/DatePicker";
import EmptyTableIcon from "../common/iconCommon/EmptyTableIcon";

interface RecentActivitiesProps {
  materials?: Material[];
}

const columns = [
  {
    id: uuid(),
    label: "STT",
    align: "center",
  },
  {
    id: uuid(),
    label: "Nguồn vật liệu",
  },
  {
    id: uuid(),
    label: "Đơn vị tính",
  },
  {
    id: uuid(),
    label: "Số lượng",
    align: "center",
  },
];

const RequiredMaterials: React.FC<RecentActivitiesProps> = ({ materials }) => {
  const renderTableHeader = (item: (typeof columns)[0]) => {
    return (
      <th
        key={item.id}
        className={cn(
          "p-[16px_8px] text-[12px] font-[600] text-neutral sticky top-0 bg-[#F3F4F6]",
          item.align === "center" && "text-center"
        )}
      >
        {item.label}
      </th>
    );
  };

  const renderTableBody = (material: Material, index: number) => (
    <tr key={material.id} className="border-b-[1px] border-b-border">
      <td className="p-[20px_8px] text-center font-[600]">{index + 1}</td>
      <td className="p-[20px_8px]">
        <div className="flex flex-row gap-[8px]">
          <img src={material.image} className="size-[32px] rounded-[4px]" />
          <div className="flex flex-col">
            <span className="text-[14px] font-[600] whitespace-nowrap text-ellipsis overflow-hidden max-w-[240px]">
              {material.name}
            </span>
            <span className="text-[10px] text-[#667085]">
              {material?.description ? material?.description : "(none)"}
            </span>
            <span className="text-[10px] text-[#3276FA]">{material.id}</span>
          </div>
        </div>
      </td>
      <td className="p-[20px_8px] font-[600]">{material.unit}</td>
      <td className="p-[20px_8px] text-center font-[600]">
        {material.quantity}
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-lg shadow overflow-auto relative">
      <div className="flex justify-between items-center p-[30px_24px]">
        <span className="text-[18px] font-[500]">Nguyên Vật Liệu Cần Mua</span>
        <MuiDatePicker />
      </div>
      <div className="w-full overflow-auto relative max-h-[498px]">
        <table
          className={cn(
            "w-full text-left min-w-[592px]",
            isEmpty(materials) && "h-[500px] !overflow-hidden"
          )}
        >
          <thead className="relative">
            <tr>{columns.map(renderTableHeader)}</tr>
          </thead>
          <tbody className="text-[14px]">
            {!isEmpty(materials) ? materials?.map(renderTableBody) : <tr></tr>}
          </tbody>
        </table>
        {isEmpty(materials) && (
          <div className="absolute top-0">
            <EmptyTableIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default RequiredMaterials;
