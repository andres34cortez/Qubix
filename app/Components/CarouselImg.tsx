import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import fondo from "../Assets/editadas/principal.jpg";
import sinteplast from "../Assets/editadas/Sinteplast.jpg"
export default function CarouselImg() {
  const slideItems = [
    {
      id: 1,
      imageSrc: fondo,
      title:
        "Proyecto YPF luz -Zonda 1 /n/ Revestimiento - aleros metálicos  /n       Tocota - San Juan ",
    },
    {
      id: 2,
      imageSrc: sinteplast,
      title: "Proyecto Sinteplaste       Red de incendio       Parque industrial- san luis",
    },
    {
      id: 3,
      imageSrc: fondo,
      title: "Alquiler de equipos       Limpieza de terrenos       Rawson - San Juan",
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
