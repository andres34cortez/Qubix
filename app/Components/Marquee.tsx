"use client";
import Image from "next/image";
import React from "react";
import arcor from "../Assets/Clients/Arcor_logo.svg.png";
import Cat from "../Assets/Clients/finning.svg";
import SaintG from "../Assets/Clients/saintG.svg";
import YPF from "../Assets/Clients/ypfluz.svg";
import Distrocuyo from "../Assets/Clients/distrocuyo.svg";
import Mseguridad from "../Assets/Clients/maxiseguridad.svg";
/* la lista de los clientes:
Finning Caterpillar 
Saint Gobain
YPF luz
Distrocuyo 
Maxi seguridad
ARCOR
*/

const Marquee: React.FC = () => {
  return (
    <div className="flex flex-row items-center bg-[#544b54] text-white text-2xl w-full ">
      <div className="relative w-full h-[45px] overflow-x-hidden">
        <div className="absolute whitespace-nowrap flex row-auto  animate-marquee w-full mt-2">
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          {/* repeat */}
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
          <Image className="w-11 mr-12" src={arcor} alt="" />
          <Image className="w-11 mr-12" src={Cat} alt="" />
          <Image className="w-11 mr-12" src={SaintG} alt="" />
          <Image className="w-11 mr-12" src={YPF} alt="" />
          <Image className="w-11 mr-12" src={Distrocuyo} alt="" />
          <Image className="w-11 mr-12" src={Mseguridad} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
