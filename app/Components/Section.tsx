import Image from "next/image";
import React from "react";
import mantenimiento from "../Assets/mantenimiento1.png";
import productos from "../Assets/mantenimiento3.png";
import contruc from "../Assets/contruc.png";
import { cn } from "@/lib/utils";
interface Props {
  title?: string;
  children?: React.ReactNode;
  variant?: "Productos" | "Mantenimiento" | "Construccion";
}

const Section = (props: Props) => {
  return (
    <div className='bg-gray-100 py-10 relative mt-20 mb-20'>
      <div className='container  flex  mx-auto px-4'>
        {/* aca abajo va el png */}
        <div
          className={cn(
            "bg-transparent w-[300px]   border-t-8 border-r-8 border-solid border-[#008eaa] absolute top-0 ",
            props.variant === "Construccion" && " right-0 border-[#ff6a14]",
            props.variant === "Productos" && " left-0",
            props.variant === "Mantenimiento" && " left-0 border-[#544b54]"
          )}
        ></div>
        <div
          className={cn(
            "flex flex-col-reverse  lg:flex-row-reverse items-center justify-center",
            props.variant === "Construccion" && "lg:flex-row"
          )}
        >
          <div className='lg:w-1/2 lg:pr-8 '>
            <Image
              src={
                props.variant === "Construccion"
                  ? contruc
                  : props.variant === "Mantenimiento"
                  ? mantenimiento
                  : productos
              }
              alt='Imagen'
              className='w-full h-auto rounded-md p-2'
            />
          </div>

          <div className='lg:w-1/2 lg:pl-8  lg:mt-0'>
            <h2 className='text-3xl font-bold mb-4'>{props.title}</h2>
            <div
              className={cn(
                "h-[2px] w-full mb-4 ",
                props.variant === "Productos" && "bg-[#008eaa]",
                props.variant === "Mantenimiento" && "bg-[#544b54]",
                props.variant === "Construccion" && "bg-[#ff6a14]"
              )}
            ></div>

            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
