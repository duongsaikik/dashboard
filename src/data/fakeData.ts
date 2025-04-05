import { generateNVLFromUUID } from "@/common/utils";
import { v4 as uuid } from "uuid";
import { DashboardData } from "../types";

export const defaultImage =
  "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";

export const dashboardData: DashboardData = {
  topProducts: [
    {
      id: uuid(),
      name: "Áo sơ mi dài tay",
      quantity: 48,
      growth: 8.2,
    },
    { id: uuid(), name: "Quần tây", quantity: 18, decline: 5.2 },
    { id: uuid(), name: "Áo khoác", quantity: 40, growth: 12.0 },
    { id: uuid(), name: "Đầm maxi", quantity: 23, growth: 3.5 },
    {
      id: uuid(),
      name: "Áo thun cổ tròn",
      quantity: 48,
      growth: 4.75,
    },
  ],
  productionPlan: [
    { name: "Áo sơ mi dài tay", plan: 80, actual: 60 },
    { name: "Quần tây", plan: 100, actual: 80 },
    { name: "Áo khoác", plan: 70, actual: 50 },
    { name: "Đầm maxi", plan: 90, actual: 70 },
  ],
  topCustomers: [
    { name: "Công ty Điện máy", quantity: 3200 },
    { name: "Happy Polo", quantity: 2400 },
    { name: "Công ty Henry", quantity: 1800 },
    { name: "Outlet Lemon", quantity: 1500 },
    { name: "Shop quần áo", quantity: 1200 },
  ],
  productionStatus: {
    completed: {
      amount: 5,
      progress: 30,
    },
    inProgress: {
      amount: 6,
      progress: 40,
    },
    pending: {
      amount: 5,
      progress: 30,
    },
  },
  productionProgress: [
    {
      id: uuid(),
      name: "Áo sơ mi dài tay",
      progress: 85,
      amount: 886,
      type: "Cái",
    },
    {
      id: uuid(),
      name: "Áo sơ mi cổ tay",
      progress: 75,
      amount: 786,
      type: "Cái",
    },
    { id: uuid(), name: "Quần baggy", progress: 45, amount: 480, type: "Cái" },
    { id: uuid(), name: "Đầm maxi", progress: 90, amount: 966, type: "Cái" },
    { id: uuid(), name: "Áo hoodie", progress: 15, amount: 160, type: "Cái" },
    {
      id: uuid(),
      name: "Áo Khoác bomber",
      progress: 15,
      amount: 160,
      type: "Cái",
    },
    {
      id: uuid(),
      name: "Áo sơ mi cụt tay",
      progress: 67,
      amount: 688,
      type: "Cái",
    },
  ],
  materials: [
    {
      id: generateNVLFromUUID(),
      name: "Chỉ cotton",
      unit: "Cuộn",
      quantity: 8,
      image: defaultImage,
    },
    {
      id: generateNVLFromUUID(),
      name: "Vải lụa",
      unit: "Mét",
      quantity: 8,
      image: defaultImage,
    },
    {
      id: generateNVLFromUUID(),
      name: "Vải lụa",
      unit: "Mét",
      quantity: 8,
      image: defaultImage,
    },
    {
      id: generateNVLFromUUID(),
      name: "Vải lụa",
      unit: "Mét",
      quantity: 8,
      image: defaultImage,
    },
    {
      id: generateNVLFromUUID(),
      name: "Vải lụa",
      unit: "Mét",
      quantity: 8,
      image: defaultImage,
    },
  ],
};
