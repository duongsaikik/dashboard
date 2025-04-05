import { LOGO } from "@/common/constant";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import BellIcon from "../common/iconCommon/BellIcon";
import ConvertIcon from "../common/iconCommon/ConvertIcon";
import MessageIcon from "../common/iconCommon/MessageIcon";
import QuestionIcon from "../common/iconCommon/QuestionIcon";
import SettingIcon from "../common/iconCommon/SettingIcon";

const RightSection = () => {
  return (
    <div className="flex flex-row justify-end items-center gap-[16px] md:gap-[20px] lg:gap-[25px] w-max">
      <div className="relative bg-white/20 rounded-[8px]">
        <IoSearchOutline className="absolute top-[23%] left-[8px] text-white size-[16px]" />
        <input
          className="max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-[28px] pl-[30px] pr-[10px] border-none outline-none py-[6px] text-[12px] sm:text-[13px] text-white bg-transparent placeholder-white/70"
          placeholder="Tìm kiếm"
        />
      </div>

      <div className="flex flex-row items-center gap-[16px] md:gap-[20px] lg:gap-[24px]">
        <div className="flex flex-row gap-[12px] md:gap-[16px] lg:gap-[18px]">
          <SettingIcon />
          <ConvertIcon />
          <MessageIcon />
          <BellIcon />
          <QuestionIcon />
        </div>
        <div className="flex flex-row items-center w-[56px] md:w-[64px] justify-between">
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
