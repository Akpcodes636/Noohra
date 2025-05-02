import React from "react";
import { ImSpinner6 } from "react-icons/im";

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center fixed left-0 right-0  bg-[#ffffff10] backdrop-blur-sm top-0">
      <ImSpinner6 size={150} className="animate-spin text-[#C5CACF66]" />
    </div>
  );
}
