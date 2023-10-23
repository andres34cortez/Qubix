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
        id="Contact"
        className="flex flex-col lg:h-[700px] h-[600px] w-full relative items-center"
      >
        <div className="flex flex-row mx-auto absolute">
          <Image
            src={Azul}
            alt=""
            className="lg:w-[600px] w-[300px] top-0 z-[-1] scale-x-[-1]"
          />
          <Image
            src={Azul}
            alt=""
            className="lg:w-[600px] w-[300px] top-0 z-[-1] lg:-ml-[60px] -ml-[20px]"
          />
        </div>
        <Image
          src={Naranja}
          alt=""
          className="lg:w-[600px] w-[300px] absolute bottom-0 left-[-2px] z-[-1] scale-x-[-1]"
        />
        <Image
          src={Gris}
          alt=""
          className="lg:w-[600px] w-[300px] bottom-[-1px] right-0 absolute ml-auto mb-0 z-[-1]"
        />
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold lg:my-14 mt-20 sm:my-20 sm:pl-8 text-center mx-auto z-10">
          Contactate con nosotros!
        </h1>
        <div className="flex flex-col justify-center lg:w-[600px] lg:mt-16 mt-12">
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col w-full text-xl font-semibold">
              mails
            </div>
            <div className="flex flex-col w-full text-xl font-semibold">
              telefonos
            </div>
          </div>
          <div className=" flex lg:flex-row flex-col justify-between lg:items-center w-full pt-16">
            <div className="flex flex-row cursor-pointer items-center mt-6 lg:mt-0">
              <Image src={instagram} alt="" className="w-[28px] h-[28px]" />
              <h3 className="pl-1 text-xl">Instagram</h3>
            </div>
            <div className="flex flex-row cursor-pointer items-center mt-6 lg:mt-0">
              <Image
                src={linkedin}
                alt=""
                className="w-[28px] h-[28px] cursor-pointer"
              />
              <h3 className="pl-1 text-xl">LinkdIn</h3>
            </div>
            <div className="flex flex-row cursor-pointer items-center mt-6 lg:mt-0">
              <Image
                src={ubicacion}
                alt=""
                className="w-[24px] h-[28px] cursor-pointer"
              />
              <h3 className="pl-1 text-xl">Dirección</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
