"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import Azul from "../Assets/azul.svg";
import Naranja from "../Assets/naranja.svg";
import Gris from "../Assets/gris.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import constru1 from "@/app/Assets/editadas/Construcciones0.jpg";
import constru2 from "../Assets/editadas/red_incendio.jpg";
import constru3 from "../Assets/editadas/sistema_deteccion.jpg";
import maquina2 from "@/app/Assets/editadas/Maquina2.jpg";
import maquina3 from "@/app/Assets/editadas/Maquina4.jpg";
import mante1 from "@/app/Assets/editadas/mantenimiento1.jpg";
import mante2 from "@/app/Assets/editadas/mantenimiento2.jpg";
import mante3 from "@/app/Assets/editadas/mantenimiento3.jpg";

interface Props {
  title?: string;
  children?: React.ReactNode;
  variant?: "Productos" | "Mantenimiento" | "Construccion";
}

const Section = (props: Props) => {
  return (
    <div className='flex relative w-full pb-24 pt-32 bg-gray-100 z-[-2] lg:pb-0 lg:pt-0 lg:h-screen lg:items-center lg:justify-center'>
      <div className='lg:max-w-[1400px] w-full'>
        <div className='container flex flex-row'>
          <Image
            src={
              props.variant === "Construccion"
                ? Naranja
                : props.variant === "Mantenimiento"
                ? Gris
                : Azul
            }
            alt=''
            className={cn(
              "lg:w-[700px] w-[300px] absolute top-0 z-[-1]",
              props.variant === "Construccion" &&
                "right-0 border-[#ff6a14] scale-y-[-1] ",
              props.variant === "Productos" && "left-0",
              props.variant === "Mantenimiento" &&
                "left-0 border-[#544b54] scale-[-1] "
            )}
          />
          <div
            className={cn(
              "flex flex-col lg:flex-row items-center justify-center",
              props.variant === "Construccion" && "lg:flex-row"
            )}
          >
            <div className='lg:w-1/2 h-full w-full flex flex-col lg:justify-center lg:pr-16'>
              <h2
                className={`lg:text-3xl text-2xl font-semibold mb-4 ${
                  props.variant === "Construccion" ? "lg:pl-16 lg:pt-0" : ""
                }`}
              >
                {props.title}
              </h2>
              <div
                className={cn(
                  "h-[2px] w-full mb-4 ",
                  props.variant === "Productos" && "bg-[#008eaa]",
                  props.variant === "Mantenimiento" && "bg-[#544b54]",
                  props.variant === "Construccion" && "bg-[#ff6a14]"
                )}
              />
              <p
                className={
                  props.variant === "Construccion"
                    ? "lg:pl-16 text-lg"
                    : "text-lg"
                }
              >
                {props.children}
              </p>
            </div>
            <div className='lg:w-1/2 pt-10'>
              <Carousel
                showIndicators={false}
                showThumbs={false}
                showArrows={true}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                // tamanio de mobile 300px
                className='max-w-[300px] md:max-w-full'
              >
                <div>
                  <Image
                    src={
                      props.variant === "Construccion"
                        ? constru1
                        : props.variant === "Mantenimiento"
                        ? mante1
                        : maquina2
                    }
                    alt='Imagen 1'
                    className='rounded-md bg-cover'
                  />
                  {props.variant === "Construccion" ? (
                    <p>Oficinas/ habitación/ baños</p>
                  ) : props.variant === "Mantenimiento" ? (
                    <p>Mantenimiento y montaje red electrica</p>
                  ) : (
                    <p className=''>Mini cargadora lonking</p>
                  )}
                </div>
                <div>
                  <Image
                    src={
                      props.variant === "Construccion"
                        ? constru2
                        : props.variant === "Mantenimiento"
                        ? mante2
                        : maquina2
                    }
                    alt='Imagen 2'
                    className='rounded-md'
                  />
                  {props.variant === "Construccion" ? (
                    <p>Red de incendio</p>
                  ) : props.variant === "Mantenimiento" ? (
                    <p>Mantenimiento edilicio</p>
                  ) : (
                    <p className=''>
                      Productos especiales para la construcción
                    </p>
                  )}
                </div>
                <div>
                  <Image
                    src={
                      props.variant === "Construccion"
                        ? constru3
                        : props.variant === "Mantenimiento"
                        ? mante3
                        : maquina3
                    }
                    alt='Imagen 3'
                    className='rounded-md'
                  />
                  {props.variant === "Construccion" ? (
                    <p>Sistema de detección</p>
                  ) : props.variant === "Mantenimiento" ? (
                    <p>Mantenimiento integral en sistemas de detección</p>
                  ) : (
                    <p className=''>Plataforma elevadoras</p>
                  )}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
