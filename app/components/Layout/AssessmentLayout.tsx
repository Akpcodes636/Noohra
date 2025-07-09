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
        <div className="container mx-auto flex items-center justify-center relative">
          {/* Back Rectangle */}
          <div className="absolute w-full max-w-[343px] md:max-w-[800px] lg:max-w-[1122px] mx-auto min-h-[527px] md:min-h-[383px]  rounded-[40px] border-[0.7px] border-[#FFF3E6] -bottom-5 z-10 bg-white-100 shadow-[0px_16.77px_20.94px_0px_#0000000D] transition-all duration-300">
            <div className="py-[20px] md:py-[40px]">{children}</div>
          </div>

          {/* Front Rectangle */}
          <div className="relative w-full max-w-[309px] md:max-w-[800px] lg:max-w-[1008px] mx-auto min-h-[750px] md:min-h-[450px] border-[0.7px] border-[#FFDBB0] shadow-[0px_16.77px_20.94px_0px_#0000000D] bg-white-100 rounded-[40px] z-0 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;
