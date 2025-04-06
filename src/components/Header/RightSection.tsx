import { LOGO } from "@/common/constant";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import BellIcon from "../common/iconCommon/BellIcon";
import ConvertIcon from "../common/iconCommon/ConvertIcon";
import MessageIcon from "../common/iconCommon/MessageIcon";
import QuestionIcon from "../common/iconCommon/QuestionIcon";
import SettingIcon from "../common/iconCommon/SettingIcon";
import { v4 as uuid } from "uuid";

const icons = [
  { id: uuid(), icon: <SettingIcon /> },
  { id: uuid(), icon: <ConvertIcon /> },
  { id: uuid(), icon: <MessageIcon /> },
  {
    id: uuid(),
    icon: (
      <div className="relative">
        <BellIcon />
        <div className="flex size-[14px] items-center justify-center absolute bg-[#EE1E1E] rounded-[8px] top-[-4px] left-[10px]">
          <span className="p-[4px] text-[8px] text-center inline-block">1</span>
        </div>
      </div>
    ),
  },
  { id: uuid(), icon: <QuestionIcon /> },
];

const RightSection = () => {
  const renderIcon = (icon: (typeof icons)[0]) => {
    return (
      <div
        key={icon.id}
        className="[&_svg]:size-[24px] sm:[&_svg]:size-fit cursor-pointer"
      >
        {icon.icon}
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row justify-end items-center gap-[16px] md:gap-[20px] lg:gap-[25px] w-max">
      <div className="relative bg-white/20 rounded-[8px] sm:block hidden">
        <IoSearchOutline className="absolute top-[23%] left-[8px] text-white size-[16px]" />
        <input
          className="max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-[28px] pl-[28px] pr-[10px] border-none outline-none py-[6px] text-[12px] sm:text-[13px] text-white bg-transparent placeholder-white/70"
          placeholder="Tìm kiếm"
        />
      </div>

      <div className="flex flex-row items-center gap-[16px] md:gap-[20px] lg:gap-[24px]">
        <div className="flex flex-row gap-[12px] items-center justify-center md:gap-[16px] lg:gap-[18px]">
          {icons.map(renderIcon)}
        </div>
        <div className="hidden sm:flex flex-row items-center w-[56px] md:w-[64px] justify-between">
          <img
            src={LOGO}
            className="size-[32px] sm:size-[36px] md:size-[40px] rounded-full"
          />
          <IoIosArrowDown className="size-[16px] md:size-[18px]" />
        </div>
      </div>
    </div>
  );
};
export default RightSection;
