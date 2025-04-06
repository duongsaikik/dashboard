import { cn } from "@/common/utils";
import { MenuItem } from "@/types";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HEADER_MENU_ITEMS } from "../../common/constant";
import Logo from "../common/iconCommon/Logo";
import MobileSection from "./MobileSection";
import RightSection from "./RightSection";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderItem = (item: MenuItem) => {
    return (
      <div
        key={item.value}
        className="p-[4px_12px] cursor-pointer hover:scale-105 duration-300 font-[400] text-[14px]"
      >
        {item.label}
      </div>
    );
  };

  return (
    <nav
      className={cn(
        "fixed z-[99999] top-0 w-[100vw] left-0 flex justify-between items-center bg-[#003DA0] text-white",
        "sm:p-[16px_32px] p-[12px_16px]"
      )}
    >
      <div className="flex flex-row items-center 2xl:justify-start justify-between w-full gap-[24px] sm:gap-[16px]">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="hidden 2xl:flex space-x-2">
          {HEADER_MENU_ITEMS.map(renderItem)}
        </div>
        <div className="2xl:hidden flex items-center gap-[24px]">
          <div className="2xl:hidden block">
            <RightSection />
          </div>
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className="2xl:block hidden">
        <RightSection />
      </div>
      {isMenuOpen && <MobileSection toggleMenu={toggleMenu} />}
    </nav>
  );
};

export default Header;
