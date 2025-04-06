import { HEADER_MENU_ITEMS, LOGO } from "@/common/constant";
import { MenuItem } from "@/types";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  toggleMenu: () => void;
};

const MobileSection: React.FC<Props> = ({ toggleMenu }) => {
  const renderMobileItem = (item: MenuItem) => (
    <div
      key={item.value}
      className="p-[12px] cursor-pointer hover:bg-blue-700 w-full text-center rounded-[8px]"
      onClick={toggleMenu}
    >
      {item.label}
    </div>
  );

  return (
    <div className="absolute sm:top-[80px] top-[60px] left-0 w-full bg-[#003DA0] text-white flex flex-col items-center 2xl:hidden p-[8px_26px_8px_12px] gap-[4px]">
      <div className="relative bg-white/20 rounded-[8px] w-full p-[4px_8px] sm:hidden block">
        <IoSearchOutline className="absolute top-[12px] left-[8px] text-white size-[16px]" />
        <input
          className="pl-[20px] w-full border-none outline-none py-[6px] text-[14px] sm:text-[13px] text-white bg-transparent placeholder-white/70"
          placeholder="Tìm kiếm"
        />
      </div>
      {HEADER_MENU_ITEMS.map(renderMobileItem)}
      <div className="flex sm:hidden flex-row items-center md:w-[64px] justify-between w-full cursor-pointer hover:bg-blue-700 p-[12px] rounded-[8px]">
        <div className="flex flex-row items-center gap-[24px]">
          <img
            src={LOGO}
            className="size-[32px] sm:size-[36px] md:size-[40px] rounded-full"
          />
          <span className="">My account</span>
        </div>
        <IoIosArrowDown className="size-[16px] md:size-[18px]" />
      </div>
    </div>
  );
};
export default MobileSection;
