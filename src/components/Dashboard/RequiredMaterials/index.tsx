import { cn, isEmpty } from "@/common/utils";
import React from "react";
import { Material } from "../../../types";
import MuiDatePicker from "../../common/DatePicker";
import EmptyTableIcon from "../../common/iconCommon/EmptyTableIcon";
import { columns, RequiredMaterialColumn } from "./helpers";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface RecentActivitiesProps {
  materials?: Material[];
}

const RequiredMaterials: React.FC<RecentActivitiesProps> = ({ materials }) => {
  const renderTableHeader = (item: RequiredMaterialColumn) => {
    return <TableHeader key={item.id} item={item} />;
  };

  const renderTableBody = (material: Material, index: number) => (
    <TableBody key={material.id} index={index} material={material} />
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
