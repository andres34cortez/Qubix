"use client";
import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="bg-[#544b54] text-white font-medium text-3xl w-full">
      <div className="relative w-full h-[45px] overflow-x-hidden">
        <div className="absolute whitespace-nowrap will-change-transform animate-marquee w-full mt-1">
          &nbsp;Infinite Marquee with long sentence Infinite Marquee with long
          sentence Infinite Marquee with long sentence Infinite Marquee with
          long sentence Infinite Marquee with long sentence
        </div>
      </div>
    </div>
  );
};

export default Marquee;
