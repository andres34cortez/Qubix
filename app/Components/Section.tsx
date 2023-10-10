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

interface Props {
  title?: string;
  children?: React.ReactNode;
  variant?: "Productos" | "Mantenimiento" | "Construccion";
}

const Section = (props: Props) => {
  return (
    <div className="flex relative w-full items-center justify-center bg-gray-100 h-screen">
      <div className="max-w-[1400px]">
        <div className="container flex flex-row">
          <Image
            src={
              props.variant === "Construccion"
                ? Naranja
                : props.variant === "Mantenimiento"
                ? Gris
                : Azul
            }
            alt=""
            className={cn(
              "w-[400px] absolute top-0 ",
              props.variant === "Construccion" &&
                " right-0 border-[#ff6a14] scale-y-[-1]",
              props.variant === "Productos" && "left-0",
              props.variant === "Mantenimiento" &&
                " left-0 border-[#544b54] scale-[-1]"
            )}
          />
          <div
            className={cn(
              "flex flex-col-reverse lg:flex-row-reverse items-center justify-center",
              props.variant === "Construccion" && "lg:flex-row"
            )}
          >
            <div className="lg:w-1/2">
              <Image
                src={
                  props.variant === "Construccion"
                    ? contruc
                    : props.variant === "Mantenimiento"
                    ? mantenimiento
                    : productos
                }
                alt="Imagen"
                className="rounded-md"
              />
            </div>
            <div className="lg:w-1/2 h-full w-full flex flex-col justify-center">
              <h2
                className={`text-3xl font-bold mb-4 ${
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
              <p className={props.variant === "Construccion" ? "pl-16" : ""}>
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
