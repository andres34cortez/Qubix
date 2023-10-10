import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import Azul from "../Assets/azul.svg";
import Naranja from "../Assets/naranja.svg";
import Gris from "../Assets/gris.svg";

export default function Us() {
  return (
    /*  <div className='flex relative w-full items-center justify-center bg-gray-100 h-screen'>
      <div className='max-w-[1400px] bg-stone-400'>
        <div className=' bg-red-600 h-full flex flex-row items-center justify-center'>
          <div className='container flex flex-row'>
            <Image
              src={Azul}
              alt=''
              className={cn(
                "w-[400px] absolute top-0 rotate-180 ",

                " left-0 border-[#544b54] scale-[-1]"
              )}
            />
          </div>
          <div className='text-white text-4xl font-bold'>qubix</div>
          <div className='w-2/3 bg-stone-400 h-full flex flex-col justify-center'>
            <div className='text-xl font-bold mb-4'>Mision</div>
            <div className='text-xl font-bold mb-4'>vision</div>
          </div>
        </div>
      </div>
    </div> */
    <div className='flex flex-colrelative w-full items-center justify-center bg-gray-100 h-screen'>
      <h1>Quienes somos?</h1>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <Image
            src={Azul}
            alt=''
            className={cn(
              "w-[150px] absolute bottom-0 content-center rotate- ",

              " left-0 border-[#544b54] scale-[-1]"
            )}
          />

          <h1>Qubix</h1>
          <h3></h3>
        </div>
        <div className='flex flex-col'>
          <h2>Mision</h2>
          <h2>Vision</h2>
        </div>
      </div>
    </div>
  );
}
