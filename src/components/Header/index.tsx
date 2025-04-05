import { cn } from "@/common/utils";
import { MenuItem } from "@/types";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Thêm icon hamburger và close
import { HEADER_MENU_ITEMS } from "../../common/constant";
import Logo from "../common/iconCommon/Logo";
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
        className="p-[4px_12px] cursor-pointer hover:scale-105 duration-300 font-[400] text-[12px] md:text-[14px]"
      >
        {item.label}
      </div>
    );
  };

  const renderMobileItem = (item: MenuItem) => (
    <div
      key={item.value}
      className="p-[12px] cursor-pointer hover:bg-blue-700 w-full text-center"
      onClick={toggleMenu}
    >
      {item.label}
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed z-[99999] top-0 w-[100vw] left-0 flex justify-between items-center bg-[#003DA0] text-white p-[20px_48px]",
        "md:p-[16px_32px] sm:p-[12px_16px]"
      )}
    >
      <div className="flex flex-row items-center lg:justify-start justify-between w-full gap-[24px] sm:gap-[16px]">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden lg:flex space-x-2">
          {HEADER_MENU_ITEMS.map(renderItem)}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className="2xl:block hidden">
          <RightSection />
        </div>
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#003DA0] text-white flex flex-col items-center 2xl:hidden">
          {HEADER_MENU_ITEMS.map(renderMobileItem)}
        </div>
      )}
    </nav>
  );
};

export default Header;
