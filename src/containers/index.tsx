import { PATHS } from "@/common/constant";
import Dashboard from "@/components/Dashboard";
import { Route, Routes } from "react-router-dom";

const Container = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Dashboard />} />
      <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
};
export default Container;
