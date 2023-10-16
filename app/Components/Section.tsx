"use client";
import Image from "next/image";
import React from "react";
import mantenimiento from "../Assets/mantenimiento1.png";
import productos from "../Assets/mantenimiento3.png";
import contruc from "../Assets/contruc.png";
import { cn } from "@/lib/utils";
import Azul from "../Assets/azul.svg";
import Naranja from "../Assets/naranja.svg";
import Gris from "../Assets/gris.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Props {
  title?: string;
  children?: React.ReactNode;
  variant?: "Productos" | "Mantenimiento" | "Construccion";
}

const Section = (props: Props) => {
  return (
    <div className='flex relative w-full items-center justify-center bg-gray-100 h-screen z-[-2]'>
      <div className='max-w-[1400px]'>
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
              "w-[700px] absolute top-0 z-[-1]",
              props.variant === "Construccion" &&
                " right-0 border-[#ff6a14] scale-y-[-1] ",
              props.variant === "Productos" && "left-0",
              props.variant === "Mantenimiento" &&
                " left-0 border-[#544b54] scale-[-1] "
            )}
          />
          <div
            className={cn(
              "flex flex-col-reverse lg:flex-row-reverse items-center justify-center",
              props.variant === "Construccion" && "lg:flex-row"
            )}
          >
            <div className=' p-6 lg:w-1/2'>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
              >
                <div>
                  <div>
                    <Image
                      src={
                        props.variant === "Construccion"
                          ? contruc
                          : props.variant === "Mantenimiento"
                          ? mantenimiento
                          : productos
                      }
                      alt='Imagen 1'
                      className='rounded-md'
                    />
                    <p>Pie de foto para Imagen 1</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src={
                        props.variant === "Construccion"
                          ? contruc
                          : props.variant === "Mantenimiento"
                          ? mantenimiento
                          : productos
                      }
                      alt='Imagen 2'
                      className='rounded-md'
                    />
                    <p>Pie de foto para Imagen 2</p>
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src={
                        props.variant === "Construccion"
                          ? contruc
                          : props.variant === "Mantenimiento"
                          ? mantenimiento
                          : productos
                      }
                      alt='Imagen 3'
                      className='rounded-md'
                    />
                    <p>Pie de foto para Imagen 3</p>
                  </div>
                </div>
              </Carousel>
            </div>

            <div className='lg:w-1/2 h-full w-full flex flex-col justify-center'>
              <h2
                className={`text-3xl font-semibold mb-4 ${
                  props.variant === "Construccion" ? "pl-16" : ""
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
                  props.variant === "Construccion" ? "pl-16 text-xl" : "text-xl"
                }
              >
                {props.children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
