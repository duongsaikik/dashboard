import { v4 as uuid } from "uuid";

export type RequiredMaterialColumn = {
  id: string;
  label: string;
  align?: string;
};

export const columns: RequiredMaterialColumn[] = [
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
