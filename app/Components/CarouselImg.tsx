"use client";
import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import imagen1 from "../Assets/Carrusel1.png";
import imagen2 from "../Assets/Carruseld.png";

export default function CarouselImg() {
  return (
    <Carousel>
      <Image src='/Assets/Carrusel1.png'height={100} width={120} alt='' />
      <Image src='/Assets/Carrusel2.png' height={100} width={120}alt='' />
    </Carousel>
  );
}
