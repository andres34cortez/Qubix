import Image from "next/image";
import React from "react";
import { ContactForm } from "./Form";
import Naranja from "../Assets/naranja.svg";
import Azul from "../Assets/azul.svg";
import Gris from "../Assets/gris.svg";
import Mapa from "../Assets/mapa.png";
import instagram from "../Assets/instagram.svg";
import linkedin from "../Assets/linkedin.svg";
import ubicacion from "../Assets/ubicacion.svg";

export default function Contact() {
  return (
    <div>
      <div
        id='Contact'
        className='flex flex-col h-[700px] w-full relative items-center'
      >
        <div className='flex flex-row mx-auto absolute'>
          <Image
            src={Azul}
            alt=''
            className='w-[600px] top-0 z-[-1] scale-x-[-1]'
          />
          <Image
            src={Azul}
            alt=''
            className='w-[600px] top-0 z-[-1] -ml-[60px]'
          />
        </div>
        <Image
          src={Naranja}
          alt=''
          className='w-[600px] absolute bottom-0 left-0 z-[-1] scale-x-[-1]'
        />
        <Image
          src={Gris}
          alt=''
          className='w-[600px] bottom-0 right-0 absolute ml-auto mb-0 z-[-1]'
        />
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold my-10 sm:my-20 sm:pl-8 text-center mx-auto z-10'>
          Contactate con nosotros!
        </h1>
        <div className='flex flex-col justify-center  '>
          <ContactForm />
          <div className=' flex flex-row justify-between items-center w-full pt-12'>
            <div className="flex flex-row cursor-pointer">
              <Image
                src={instagram}
                alt=''
                className='w-[24px] '
              />
              <h3 className="pl-1 pt-1">Instagram</h3>
            </div>

            <div className="flex flex-row cursor-pointer">
              <Image
                src={linkedin}
                alt=''
                className='w-[24px] cursor-pointer'
              />
              <h3 className="pl-1 pt-1">LinkdIn</h3>
            </div>
            <div className="flex flex-row cursor-pointer">
              <Image
                src={ubicacion}
                alt=''
                className='w-[24px] cursor-pointer'
              />
              <h3 className="pl-1 pt-1">Dirección</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
