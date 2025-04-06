import { dashboardData } from "@/data/fakeData";
import { DashboardData } from "@/types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import ProductionStatusChart from "./ProductionStatusChart";
import ProductionPlanChart from "./ProductionPlanChart";
import ProductionProgress from "./ProductionProgress";
import RequiredMaterials from "./RequiredMaterials";
import TopCustomersChart from "./TopCustomersChart";
import TopProducts from "./TopProducts";
import loading from "../../assets/loading.svg";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const currentLocation = useLocation();
  const query = new URLSearchParams(currentLocation.search);

  useEffect(() => {
    setTimeout(() => {
      if (!query?.has("isEmpty")) {
        setData(dashboardData);
      }
      setIsLoading(false);
    }, 1000);
  }, [query?.get("isEmpty")]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={loading} />
      </div>
    );
  }

  return (
    <div className="p-[22px] sm:p-[44px] bg-white w-full">
      <Header />
      <div className="pt-[34px]">
        <TopProducts products={data?.topProducts} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <ProductionPlanChart data={data?.productionPlan} />
          <TopCustomersChart data={data?.topCustomers} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <ProductionStatusChart data={data?.productionStatus} />
          <ProductionProgress data={data?.productionProgress} />
          <RequiredMaterials materials={data?.materials} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
