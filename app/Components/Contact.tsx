import Image from "next/image";
import React from "react";
import Naranja from "../Assets/naranja.svg";
import Azul from "../Assets/azul.svg";
import Gris from "../Assets/gris.svg";
import instagram from "../Assets/instagram.svg";
import linkedin from "../Assets/linkedin.svg";
import ubicacion from "../Assets/ubicacion.svg";
import correo from "../Assets/correo.png";
import whatsapp from "../Assets/whatsapp.png";

export default function Contact() {
  return (
    <div>
      <div
        id='Contact'
        className='flex flex-col lg:h-[700px] pb-32 w-full relative items-center'
      >
        <div className='flex flex-row mx-auto absolute'>
          <Image
            src={Azul}
            alt=''
            className='lg:w-[600px] w-[300px] top-0 z-[-1] scale-x-[-1]'
          />
          <Image
            src={Azul}
            alt=''
            className='lg:w-[600px] w-[300px] top-0 z-[-1] lg:-ml-[60px] -ml-[20px]'
          />
        </div>
        <Image
          src={Naranja}
          alt=''
          className='lg:w-[600px] w-[300px] absolute bottom-0 left-[-2px] z-[-1] scale-x-[-1]'
        />
        <Image
          src={Gris}
          alt=''
          className='lg:w-[600px] w-[300px] bottom-[-1px] right-0 absolute ml-auto mb-0 z-[-1]'
        />
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-semibold lg:my-14 mt-20 sm:my-20 sm:pl-8 text-center mx-auto z-[5]'>
          Contactate con nosotros!
        </h1>
        <div className='flex flex-col justify-center lg:w-[600px] lg:mt-16 mt-12'>
          <div className='flex lg:flex-row flex-col'>
            <div className='flex flex-col w-full text-xl'>
              <h2 className='underline font-semibold lg:mt-12 lg:pb-2'>
                Nuestros Correos
              </h2>
              <div className='flex flex-row cursor-pointer items-center mt-6 lg:mt-0'>
                <a
                  href='Amolina@qubix.com.ar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row'
                >
                  <Image src={correo} alt='' className='w-[28px] h-[28px]' />
                  <h3 className='pl-1 text-xl'>Amolina@qubix.com.ar</h3>{" "}
                </a>
              </div>
              <div className='flex flex-row cursor-pointer items-center mt-6 lg:mt-0'>
                <a
                  href='mailto:Info@qubix.com.ar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row'
                >
                  <Image src={correo} alt='' className='w-[28px] h-[28px]' />

                  <h3 className='pl-1 text-xl'>Info@qubix.com.ar</h3>
                </a>
              </div>
            </div>
            <div className='flex flex-col w-full text-xl'>
              <h2 className='underline mt-12 font-semibold lg:pb-2'>
                Nuestros teléfonos
              </h2>
              <div className='flex flex-row cursor-pointer items-center mt-6 lg:mt-0'>
                <a
                  href='https://wa.me/5492645855079'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row'
                >
                  <Image src={whatsapp} alt='' className='w-[28px] h-[28px]' />
                  <h3 className='pl-1 text-xl'>+5492645855079</h3>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=' flex flex-row justify-between lg:items-center w-full pt-12 lg:pt-32'>
            <div className='flex flex-row cursor-pointer items-center mt-6 lg:mt-0'>
              <a
                href='https://www.instagram.com/qubixsas/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row'
              >
                <Image src={instagram} alt='' className='w-[28px] h-[28px]' />

                <h3 className='pl-1 text-xl hidden lg:flex'>Instagram</h3>
              </a>
            </div>
            <div className='flex flex-row cursor-pointer items-center mt-6 lg:mt-0'>
              <a
                href='https://www.linkedin.com/company/qubixconstrucciones'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row'
              >
                <Image
                  src={linkedin}
                  alt=''
                  className='w-[28px] h-[28px] cursor-pointer'
                />
                <h3 className='pl-1 text-xl hidden lg:flex'>LinkdIn</h3>{" "}
              </a>
            </div>
            <div className='flex flex-row cursor-pointer items-center mt-6 lg:mt-0'>
              <a
                href='https://www.google.com/maps/place/QUBIX+SAS/@-31.5522681,-68.514165,15z/data=!4m2!3m1!1s0x0:0xcec0a4e61544bca7?sa=X&ved=2ahUKEwjPxv2Ns5GCAxUyILkGHXrJDf4Q_BJ6BAhDEAA&ved=2ahUKEwjPxv2Ns5GCAxUyILkGHXrJDf4Q_BJ6BAhOEAc'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row'
              >
                <Image
                  src={ubicacion}
                  alt=''
                  className='w-[24px] h-[28px] cursor-pointer'
                />

                <h3 className='pl-1 text-xl  hidden lg:flex'>Dirección</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
