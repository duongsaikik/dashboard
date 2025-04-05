import React from "react";

const NoData: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          Không có dữ liệu để hiển thị
        </h2>
        <p className="text-gray-400 mt-2">
          Vui lòng kiểm tra lại hoặc thử lại sau.
        </p>
      </div>
    </div>
  );
};

export default NoData;