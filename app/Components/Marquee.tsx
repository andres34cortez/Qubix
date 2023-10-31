"use client";
import Image from "next/image";
import React from "react";
import arcor from "../Assets/Clients/Arcor_logo.svg.png";
import Cat from "../Assets/Clients/finning.png";
import SaintG from "../Assets/Clients/saintG.png";
import YPF from "../Assets/Clients/ypfluz.png";
import Distrocuyo from "../Assets/Clients/distrocuyo.jpg";
import Mseguridad from "../Assets/Clients/maxiseguridad.png";
import PedidosYa from "../Assets/Clients/pedidosYa.jpg";
import JoseMaria from "../Assets/Clients/joseMaria.png";
import Senasa from "@/app/Assets/Clients/Senasa.png"
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
    <div className="flex flex-row items-center text-white text-4xl w-full z-10 h-[124px] overflow-hidden">
      <div className="whitespace-nowrap flex flex-row animate-marquee w-full items-center gap-20">
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
        {/* repeat */}
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
        <Image className="h-20" src={arcor} alt="" />
        <Image className="h-[72px]" src={Cat} alt="" />
        <Image className="h-20" src={SaintG} alt="" />
        <Image className="h-20" src={YPF} alt="" />
        <Image className="h-[72px]" src={Distrocuyo} alt="" />
        <Image className="h-[72px]" src={Mseguridad} alt="" />
        <Image className="h-[72px]" src={PedidosYa} alt="" />
        <Image className="h-[72px]" src={JoseMaria} alt="" />
        <Image className="h-[72px]" src={Senasa} alt="" />
      </div>
    </div>
  );
};

export default Marquee;
