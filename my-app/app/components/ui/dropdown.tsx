"use client";
import Link from "next/link";
import { useState } from "react";
import { AboutDropdown } from "../utilis/contents/HomePage.Content";

interface DropdownItem {
    title: string;
    router: string;
  }
  
  interface DropdownProps {
    items?: DropdownItem[];
  }

const Dropdown = ({ items = [] }: DropdownProps) => {
  // You can use these default items if no items are passed
 
  
  // Use provided items or fallback to defaults
  const dropdownItems = items.length > 0 ? items : AboutDropdown;
  
  return (
    <div className="shadow-xl  bg-[#FFFF] flex items-center justify-center">
      <div className="w-[200px]">
        {dropdownItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.router}
            className="block border-b border-[#C2C2C280] px-4 py-2 text-[13px] leading-[26px] font-medium text-center text-[#0E1133] hover:text-[#2B4EFF]"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;