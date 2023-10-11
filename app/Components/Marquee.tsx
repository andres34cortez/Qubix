"use client";
import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="flex flex-row items-center bg-[#544b54] text-white text-2xl w-full ">
      <div className="relative w-full h-[45px] overflow-x-hidden">
        <div className="absolute whitespace-nowrap  animate-marquee w-full mt-2">
          &nbsp;YPF • SANIT GOBAIN • YPF • SAINT GOBAIN • YPF • SANIT GOBAIN •
          YPF • SAINT GOBAIN • YPF • SANIT GOBAIN • YPF • SAINT GOBAIN • YPF •
          SANIT GOBAIN • YPF • SAINT GOBAIN • YPF • SANIT GOBAIN • YPF • SAINT
          GOBAIN • YPF • SANIT GOBAIN • YPF • SAINT GOBAIN • YPF • SANIT GOBAIN
          • YPF • SAINT GOBAIN •
        </div>
      </div>
    </div>
  );
};

export default Marquee;
