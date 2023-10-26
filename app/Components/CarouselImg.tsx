import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import fondo from "../Assets/editadas/principal.jpg";
import sinteplast from "../Assets/editadas/proyecto_sinteplaste.jpg";
import maquina1 from "@/app/Assets/editadas/hero3.jpg";
export default function CarouselImg() {
  const slideItems = [
    {
      id: 1,
      imageSrc: fondo,
      title: "Proyecto YPF LUZ - Zonda 1 ",
      title1: "Revestimiento - aleros metálicos",
      title2: "Tocota - San Juan",
    },
    {
      id: 2,
      imageSrc: sinteplast,
      title: "Proyecto Sinteplaste              ",
      title1: "Red de incendio",
      title2: "Parque industrial - San Luis",
    },
    {
      id: 3,
      imageSrc: maquina1,
      title: "Alquiler de equipos      ",
      title1: "  Limpieza de terrenos",
      title2: "Rawson - San Juan",
    },
  ];

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      transitionTime={2000}
    >
      {slideItems.map((item) => (
        <div key={item.id} style={{ maxHeight: "800px" }}>
          <div className="">
            <Image src={item.imageSrc} alt={`Slide ${item.id}`} />
            <div
              style={{
                position: "absolute",
                top: "50px", // Ajusta la posición vertical
                left: "40px", // Ajusta la posición horizontal
                width: "600px",
                background: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
                color: "white", // Color del texto
                padding: "12px", // Espaciado alrededor del título
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              {item.title} <br />
              {item.title1} <br />
              {item.title2}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
