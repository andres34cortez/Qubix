import Image from "next/image";
import React from "react";
import { ContactForm } from "./Form";
import Naranja from "../Assets/naranja.svg";
import Azul from "../Assets/azul.svg";
import Gris from "../Assets/gris.svg";
import Mapa from "../Assets/mapa.png";

export default function Contact() {
  return (
    <div>
      <div
        id="Contact"
        className="flex flex-col h-[700px] w-full relative items-center"
      >
        <div className="flex flex-row mx-auto absolute">
          <Image
            src={Azul}
            alt=""
            className="w-[600px] top-0 z-[-1] scale-x-[-1]"
          />
          <Image
            src={Azul}
            alt=""
            className="w-[600px] top-0 z-[-1] -ml-[60px]"
          />
        </div>
        <Image
          src={Naranja}
          alt=""
          className="w-[600px] absolute bottom-0 left-0 z-[-1] scale-x-[-1]"
        />
        <Image
          src={Gris}
          alt=""
          className="w-[600px] bottom-0 right-0 absolute ml-auto mb-0 z-[-1]"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold my-10 sm:my-20 sm:pl-8 text-center mx-auto z-10">
          Contactate con nosotros!
        </h1>
        <div className="flex flex-col justify-center sm:flex-row">
          <div className="">
            <Image
              src={Mapa}
              alt="mapa"
              className="w-full h-auto sm:w-[460px] cursor-pointer"
            />
            <h4 className="p-4 text-center">Dirección: RN40, J5400 San Juan</h4>
          </div>
          <div className="w-full sm:w-1/2 lg:ml-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
