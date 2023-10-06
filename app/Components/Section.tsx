import Image from "next/image";
import React from "react";
import mantenimientoCard from "../Assets/mantenimientoCard.jpg";
import { cn } from "@/lib/utils";
interface Props {
  title?: string;
  children?: React.ReactNode;
  variant?: "Productos" | "Materiales" | "Construccion";
}

const Section = (props: Props) => {
  return (
    <div className='bg-gray-100 py-10 relative'>
      <div className='container  flex  mx-auto px-4'>
        {/* aca abajo va el png */}
        <div
          className={cn(
            "bg-transparent w-[300px] h-0 border-t-8 border-r-8 border-solid border-[#008eaa] absolute top-0 right-0",
            props.variant === "Construccion" && "left-0 border-[#ff6a14]"
          )}
        ></div>
        <div
          className={cn(
            "flex flex-col-reverse  lg:flex-row-reverse items-center justify-center",
            props.variant === "Construccion" && "lg:flex-row"
          )}
        >
          <div className='lg:w-1/2 lg:pr-8'>
            <Image
              src={mantenimientoCard}
              alt='Imagen'
              className='w-full h-auto'
            />
          </div>

          <div className='lg:w-1/2 lg:pl-8 mt-5 lg:mt-0'>
            <h2 className='text-3xl font-bold mb-4'>{props.title}</h2>
            <div
              className={cn(
                "h-[1px] w-full  bg-black",
                props.variant === "Productos" && "bg-[#008eaa]",
                props.variant === "Materiales" && "bg-[#544f4b]",
                props.variant === "Construccion" && "bg-[#ff6a14]"
              )}
            ></div>
            {/* <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed vehicula urna nec leo bibendum.
            </p> */}
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
