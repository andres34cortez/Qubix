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
 &nbsp;YPF • SANIT GOBAIN • YPF • SAINT GOBAIN • YPF • SANIT GOBAIN •
          YPF • SAINT GOBAIN • YPF • SANIT GOBAIN • YPF • SAINT GOBAIN • YPF •
          SANIT GOBAIN • YPF • SAINT GOBAIN • YPF • SANIT GOBAIN • YPF • SAINT
          GOBAIN • YPF • SANIT GOBAIN • YPF • SAINT GOBAIN • YPF • SANIT GOBAIN
          • YPF • SAINT GOBAIN •
*/
const Marquee: React.FC = () => {
  return (
    <div className='flex flex-row items-center bg-[#544b54] text-white text-2xl w-full '>
      <div className='relative w-full h-[45px] overflow-x-hidden'>
        <div className='absolute whitespace-nowrap flex row-auto  animate-marquee w-full mt-2'>
       {/*    &nbsp;
          <Image className='w-11' src={arcor} alt='ypf'></Image>
          <Image className='w-11' src={Cat} alt='ypf'></Image>
          <Image className='w-11' src={SaintG} alt='ypf'></Image>
          <Image className='w-11' src={YPF} alt='ypf'></Image>
          <Image className='w-11' src={Distrocuyo} alt='ypf'></Image>
          <Image className='w-11' src={Mseguridad} alt='ypf'></Image> */}
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
