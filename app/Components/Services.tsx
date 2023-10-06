import Image from "next/image";
import React from "react";
import mantenimientoCard from "../Assets/mantenimientoCard.jpg";
import construccionCard from "../Assets/construccionCard.png";

export default function Services() {
  return (
    <div className='flex flex-col items-center '>
      <h1 className='text-2xl font-bold mb-6'>Nuestros servicios</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='relative bg-white rounded-lg p-6 text-center shadow-md'>
          <div className='absolute top-0 left-0 w-16 h-8 bg-[#008eaa] border-3 border-solid border-gray-500 rounded-tl-2xl'></div>
          <div className='absolute bottom-0 right-0 w-16 h-8 bg-[#008eaa] border-3 border-solid border-gray-500 rounded-br-2xl'></div>
          <Image
            className='w-48 h-48 rounded-3xl mx-auto mb-4'
            src={construccionCard}
            alt=''
          />
          <h3 className='text-xl font-semibold mb-2'>
            VENTA DE PRODUCTOS E INSUMOS
          </h3>
          {/* <p className='text-gray-600'>
            Ventas de insumos de ferretería industrial.
            <br /> Venta y alquiler de herramientas industriales.
          </p> */}
        </div>

        <div className='relative bg-white rounded-lg p-6 text-center shadow-md'>
          <div className='absolute top-0 left-0 w-16 h-8 bg-[#ff6a14] border-3 border-solid border-gray-500 rounded-tl-2xl'></div>
          <div className='absolute bottom-0 right-0 w-16 h-8 bg-[#ff6a14] border-3 border-solid border-gray-500 rounded-br-2xl'></div>
          <Image
            className='w-48 h-48 rounded-3xl mx-auto mb-4'
            src={construccionCard}
            alt=''
          />
          <h3 className='text-xl font-semibold mb-2'>
            CONSTRUCCIONES EN GENERAL
          </h3>
          {/*  <p className='text-gray-600'>
            Civiles, electromecánicas
            <br /> Arquitectura industrial e ingeniería para Diseño y proyectos
            de obra Civil y electromecánica.
            <br />
            Planificación, gestión y proyectos de obra mediante sistema BIM.
            <br />
            Construcciones especiales.
            <br /> Montaje, y soldaduras especiales. Metalúrgica en general.
            <br /> Módulos estructurales industriales o de viviendas.
            <br /> Construcción Tradicional o Sistemas Alternativos, Steel
            frame, cassaforma y panelizado.
          </p> */}
        </div>
        <div className='relative bg-white rounded-lg p-6 text-center shadow-md'>
          <div className='absolute top-0 left-0 w-16 h-8 bg-[#544f4b] border-3 border-solid border-gray-500 rounded-tl-2xl'></div>
          <div className='absolute bottom-0 right-0 w-16 h-8 bg-[#544f4b] border-3 border-solid border-gray-500 rounded-br-2xl'></div>
          <Image
            className='w-48 h-48 rounded-3xl mx-auto mb-4'
            src={mantenimientoCard}
            alt=''
          />
          <h3 className='text-xl font-semibold mb-2'>
            MANTENIMIENTO INDUSTRIAL
          </h3>
          {/*  <p className='text-gray-600'>
            Mantenimiento eléctrico y mecánico in-situ, o en taller.
            <br />
            Automatización. Mantenimiento Edilicio - <br />
            Redes de incendio y sistema de detección. -<br /> Servicio integral
            mecánico para minería y empresas constructoras.
          </p> */}
        </div>
      </div>
    </div>
  );
}
