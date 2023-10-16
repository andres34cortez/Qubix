import Image from "next/image";
import React from "react";
import { ContactForm } from "./Form";
import Naranja from "../Assets/naranja.svg";
import Azul from "../Assets/azul.svg";
import Gris from "../Assets/gris.svg";
import Mapa from "../Assets/Mapa.png";
export default function Contact() {
  return (
    <div>
      <div id='Contact' className='flex flex-col h-[700px] w-full relative'>
        <Image
          src={Naranja}
          alt=''
          className='w-[600px] absolute bottom-0 z-[-1] scale-x-[-1]'
        />
        <Image
          src={Gris}
          alt=''
          className='w-[600px] bottom-0 right-0 absolute ml-auto mb-0  z-[-1]'
        />
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold my-10 sm:my-20 pl-4 sm:pl-8 md:pl-12 lg:pl-24 text-center mx-auto'>
          Contactate con nosotros!
        </h1>

        <div className='flex flex-col items-center sm:flex-row'>
          <div className='w-full sm:w-1/2'>
            <ContactForm />
          </div>
          <div className='w-full sm:w-1/2 sm:pl-8 mt-6 sm:mt-0 '>
            <Image
              src={Mapa}
              alt='mapa'
              className='w-full h-auto sm:w-[460px] ml-0 sm:ml-52 pt-3 cursor-pointer '
            />
            <h4 className=' p-4 text-center'>
              Dirección: RN40, J5400 San Juan
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
