"use client";
import GoBack from "../ui/Goback";
import Logo from "../ui/Logo";
import useProgressStore from "@/app/zustand/store";

export default function ProgressHeader() {
  const { progress } = useProgressStore(); 

  return (
    <header className="xl:h-[13vh] 2xl:h-[10vh] shadow-[0px_2px_4px_0px_#EFEFEF]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-0 py-6">
          <div>
            <GoBack />
          </div>
          <div>
            <Logo />
          </div>
          <div></div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-200">
        <div
          className="h-1 bg-[#2EBAAC] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </header>
  );
}

