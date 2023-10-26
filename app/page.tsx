"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import Section from "./Components/Section";
import Navbar from "./Components/NavBar";
import Marquee from "./Components/Marquee";
import LottieAnimation from "./Components/Qubix";
import animationData from "./Assets/Lotties/data1.json";
import { motion, AnimatePresence } from "framer-motion";

import Contact from "./Components/Contact";
import CarouselImg from "./Components/CarouselImg";
import Image from "next/image";
import Q from "./Assets/Q.svg";
import Arcor from "./Assets/Clients/Arcor_logo.svg.png";
import YPF from "./Assets/Clients/ypfluz.png";
import Cat from "./Assets/Clients/finning.png";
import SaintG from "./Assets/Clients/saintG.png";
import Distrocuyo from "./Assets/Clients/distrocuyo.jpg";
import Mseguridad from "./Assets/Clients/maxiseguridad.png";
import JoseMaria from "./Assets/Clients/joseMaria.png";
import PedidosYa from "./Assets/Clients/pedidosYa.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <div className="hidden lg:flex lg:flex-col">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar />
          </motion.div>
        )}
        <motion.div
          id="Home"
          className={`hidden lg:flex lg:flex-col lg:w-full lg:items-center lg:justify-center lg:min-h-screen lg:py-28`}
        >
          <motion.div
            className={`lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:w-full lg:items-center lg:justify-center bg-cover bg-no-repeat bg-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 6 }}
          />
          <motion.div
            className={`lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:w-full lg:items-center lg:justify-center -z-[-5]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 6 }}
          />
          <motion.div
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{ opacity: 1, zIndex: 10 }}
            transition={{ duration: 2, delay: 6 }}
          >
            <div
              className="flex flex-col min-h-[300px] border-l-4 border-t-4 border-r-4 border-[#008eaa] pt-12 px-6 rounded-lg mb-2 z-10"
              style={{
                width: `calc(100vw - 128px)`,
              }}
            >
              <h1 className="mb-4 text-4xl font-semibold text-[#008eaa] self-center drop-shadow-lg z-10">
                QUIENES SOMOS?
              </h1>
              <p className="text-black text-xl max-w-[800px] self-center text-center z-10">
                QUBIX es una pyme que brinda soluciones integrales, abocada a la
                actividad de ingeniería, arquitectura y construcción
                multidisciplinaria, venta de productos e insumos asociados al
                rubro y el mantenimiento general de industrias.
              </p>
            </div>
          </motion.div>
          <div className={`absolute self-center animate-widen w-[400px] z-10`}>
            <motion.div
              initial={{ opacity: 1, zIndex: 10 }}
              animate={{ opacity: 0.2, zIndex: 10, overflow: "hidden" }}
              transition={{ duration: 2, delay: 6 }}
            >
              <LottieAnimation animationData={animationData} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{ opacity: 1, zIndex: 10 }}
            transition={{ duration: 2, delay: 6 }}
          >
            <div
              className="flex flex-row flex-1 w-full z-10"
              style={{ width: `calc(100vw - 128px)` }}
            >
              <div className="flex flex-col flex-1 border-l-4 border-b-4 border-[#ff6a14] min-h-[400px] mt-2 mr-5 rounded-lg pl-6 pt-6 pr-[200px] z-10">
                <h1 className="mb-4 text-4xl font-semibold text-[#ff6a14] z-10 drop-shadow-lg">
                  MISION
                </h1>
                <p className="text-black text-xl z-10 drop-shadow-lg">
                  Nuestra misión es siempre con el cliente, somos una empresa
                  que desarrolla proyectos y los ejecuta con exigentes
                  estándares de seguridad, calidad y puntualidad. Dicha misión
                  es el seguimiento necesario y obligatorio con nuestro cliente
                  durante el proceso de proyección, ejecución y entrega del
                  mismo.
                </p>
              </div>
              <div className="flex flex-col flex-1 border-b-4 border-r-4 border-[#544b54] min-h-[400px] mt-2 rounded-lg pt-6 pr-6 pl-[220px] z-10">
                <h1 className="mb-4 text-4xl font-semibold text-[#3f3b3f] z-10 drop-shadow-lg ">
                  VISION
                </h1>
                <p className="text-black text-xl z-10 drop-shadow-lg">
                  Nuestra visión, es ser una empresa valorizada y destacada por
                  su compromiso y confiabilidad con sus clientes, y proveedores,
                  ofreciendo el mejor servicio e innovación en sus proyectos.
                  Tenemos como principal campo el de la sustentabilidad social y
                  ambiental en el tiempo, la optimización de los recursos y la
                  estandarización de la calidad de los servicios a largo plazo.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, zIndex: 10 }}
            animate={{ opacity: 1, zIndex: 10 }}
            transition={{ duration: 0.4 }}
            className="lg:overflow-hidden"
          >
            <div>
              <CarouselImg />
            </div>
            {isVisible && (
              <div className="flex flex-col">
                <div
                  id="Services"
                  className=" flex flex-col items-center w-full"
                />
                <Section
                  title=" Venta y alquiler de equipos e insumos"
                  variant="Productos"
                >
                  <p className="text-2xl">
                    ▪ Ventas de insumos industrial.
                    <br />
                    ▪ Ventas de insumos para la construcción.
                    <br />
                    ▪ Venta y alquiler de herramientas.
                    <br />▪ Alquiler de equipos para minería/construcción.
                  </p>
                </Section>
                <Section
                  title="Construcciones Civiles, Electromecánicas y Montaje."
                  variant="Construccion"
                >
                  <p className="text-2xl">
                    ▪ Arquitectura industrial e ingeniería para proyectos
                    <br />
                    ▪ Planificación, gestión y proyectos de obra mediante
                    sistema BIM.
                    <br /> ▪ Construcciones: <br /> &nbsp; - Montaje y
                    soldaduras especiales <br /> &nbsp; - Metalúrgica <br />
                    &nbsp; - Pipping <br /> &nbsp; - Módulos para minería
                    <br /> &nbsp; - Tradicionales y steal frame.
                    <br /> ▪ Red de incendio y Sistema de detección.
                  </p>
                </Section>
                <Section
                  title=" Mantenimiento Industrial"
                  variant="Mantenimiento"
                >
                  <p className="text-2xl">
                    ▪ Mantenimiento edilicio. <br /> ▪ Mantenimiento eléctrico y
                    mecánico in situ o en taller. <br />▪ Mantenimiento en redes
                    de incendio y sistemas de detección.
                  </p>
                </Section>

                <Marquee />
                <div
                  id="Contact"
                  className="flex flex-col h-[700px] w-full relative"
                >
                  <Contact />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
      {/* MOBILE */}
      <div className="flex flex-col lg:hidden w-full">
        <div className="fixed w-full z-10 bg-white">
          <Navbar />
        </div>
        <div className="flex flex-col min-h-[300px] pt-24 mb-16 px-6 mt-10">
          <Image src={Q} alt="" className="mb-20 self-center w-36" />
          <h1 className="mb-4 text-3xl font-semibold text-[#008eaa] self-center drop-shadow-lg">
            QUIENES SOMOS?
          </h1>
          <p className="text-black text-lg self-center text-center">
            QUBIX es una pyme que brinda soluciones integrales, abocada a la
            actividad de ingeniería, arquitectura y construcción
            multidisciplinaria, venta de productos e insumos asociados al rubro
            y el mantenimiento general de industrias.
          </p>
        </div>
        <div id="Servicesm" className="flex flex-col items-center w-full">
          <Section
            title=" Venta y alquiler de equipos e insumos"
            variant="Productos"
          >
            ▪ Ventas de insumos industrial.
            <br />
            ▪ Ventas de insumos para la construcción.
            <br />
            ▪ Venta y alquiler de herramientas.
            <br />▪ Alquiler de equipos para minería/construcción.
          </Section>
          <Section
            title="Construcciones Civiles, Electromecánicas y Montaje."
            variant="Construccion"
          >
            ▪ Arquitectura industrial e ingeniería para proyectos
            <br />
            ▪ Planificación, gestión y proyectos de obra mediante sistema BIM.
            <br /> ▪ Construcciones: <br /> &nbsp; - Montaje y soldaduras
            especiales <br /> &nbsp; - Metalúrgica <br />
            &nbsp; - Pipping <br /> &nbsp; - Módulos para minería
            <br /> &nbsp; - Tradicionales y steal frame.
            <br /> ▪ Red de incendio y Sistema de detección.
          </Section>
          <Section title=" Mantenimiento Industrial" variant="Mantenimiento">
            ▪ Mantenimiento edilicio. <br /> ▪ Mantenimiento eléctrico y
            mecánico in situ o en taller. <br />▪ Mantenimiento en redes de
            incendio y sistemas de detección.
          </Section>
        </div>
        <div className="flex flex-col py-8 gap-8 items-center justify-center px-8">
          <h1 className="font-semibold underline text-lg">
            Nuestros Clientes!
          </h1>
          <div className="flex flex-row gap-4 justify-center pt-1">
            <Image src={Arcor} alt="" className="w-[90px] h-14" />
            <Image src={YPF} alt="" className="w-[40%] h-14" />
          </div>
          <Image src={SaintG} alt="" className="w-[60%] h-14 " />
          <Image src={Cat} alt="" className="w-[80%] h-[50px] " />
          <Image src={Distrocuyo} alt="" className="w-[70%] " />
          <Image src={JoseMaria} alt="" className="w-[70%] " />
          <Image src={Mseguridad} alt="" className="w-[70%] " />
          <Image
            src={PedidosYa}
            alt=""
            className="w-[40%] h-[50px] pt-1 mb-20"
          />
        </div>
        <div id="Contactm" className="flex flex-col h-[600px] w-full relative">
          <Contact />
        </div>
      </div>
    </AnimatePresence>
  );
}
