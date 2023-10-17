import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import fondo from "../Assets/Carrusel2.png";

export default function CarouselImg() {
  const slideItems = [
    {
      id: 1,
      imageSrc: fondo,
      title:
        "PROYECTO YPF ESTO ES UN TEXTO DE PRUEBA - PROYECTO YPF ESTO ES UN TEXTO DE PRUEBA- PROYECTO YPF ESTO ES UN TEXTO DE PRUEBA-PROYECTO YPF ESTO ES UN TEXTO DE PRUEBA-PROYECTO YPF ESTO ES UN TEXTO DE PRUEBAPROYECTO YPF ESTO ES UN TEXTO DE PRUEBAv",
    },
    {
      id: 2,
      imageSrc: fondo,
      title: "Título de la Slide 2",
    },
    {
      id: 3,
      imageSrc: fondo,
      title: "Título de la Slide 3",
    },
  ];

  return (
    <Carousel showStatus={false} showThumbs={false}>
      {slideItems.map((item) => (
        <div key={item.id} style={{ maxHeight: "950px" }}>
          <div style={{ position: "relative" }}>
            <Image src={item.imageSrc} alt={`Slide ${item.id}`} />
            <div
              style={{
                position: "absolute",
                top: "100px", // Ajusta la posición vertical
                left: "0px", // Ajusta la posición horizontal
                background: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
                color: "white", // Color del texto
                padding: "5px", // Espaciado alrededor del título
              }}
            >
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
