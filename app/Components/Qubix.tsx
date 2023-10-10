"use client";

import Image from "next/image";
import React from "react";
import CaraAzul from "../Assets/cara_azul.svg";
import CaraNaranja from "../Assets/cara_naranja.svg";
import CaraGris from "../Assets/cara_gris.svg";

export default function Qubix() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Image src={CaraAzul} alt="" className={`absolute`} />
      <Image src={CaraNaranja} alt="" className={`absolute`} />
      <Image src={CaraGris} alt="" className={`absolute`} />
    </div>
  );
}
