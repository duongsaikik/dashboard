import { Material } from "@/types";

type Props = {
  material: Material;
  index: number;
};

const TableBody: React.FC<Props> = ({ material, index }) => {
  return (
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
};
export default TableBody;
