"use client";
import React, { FC } from "react";
import ProgressHeader from "../ui/ProgressHeader";

interface AHDHProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  progress: number; // Added progress property
}

const AssessmentLayout: FC<AHDHProps> = ({ children }) => {
  return (
    <div>
      <ProgressHeader />
      <div className="pt-[138px]">
        <div className="container-sm mx-auto flex items-center justify-center relative">
          {/* Back Rectangle */}
          <div className="absolute w-[1122px] h-[383px] rounded-[40px] border-[0.7px] border-[#FFF3E6] -bottom-5 z-10 bg-white-100 shadow-[0px_16.77px_20.94px_0px_#0000000D]">
            <div className="p-[40px]">{children}</div>
          </div>

          {/* Front Rectangle */}
          <div className="relative w-[1008px] h-[430px] border-[0.7px] border-[#FFDBB0]  shadow-[0px_16.77px_20.94px_0px_#0000000D] bg-white-100 rounded-[40px] z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;
