import { cn } from "@/common/utils";
import { RequiredMaterialColumn } from "./helpers";

type Props = {
  item: RequiredMaterialColumn;
};

const TableHeader: React.FC<Props> = ({ item }) => {
  return (
    <th
      className={cn(
        "p-[16px_8px] text-[12px] font-[600] text-neutral sticky top-0 bg-[#F3F4F6]",
        item.align === "center" && "text-center"
      )}
    >
      {item.label}
    </th>
  );
};
export default TableHeader;
