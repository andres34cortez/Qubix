import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import fondo from "../Assets/editadas/principal.jpg";

export default function CarouselImg() {
  const slideItems = [
    {
      id: 1,
      imageSrc: fondo,
      title:
        "PROYECTO YPF ESTO ES UN TEXTO DE PRUEBA - PROYECTO YPF ESTO ES UN TEXTO DE PRUEBA",
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
          <div style={{ position: "relative" }}>
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
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
