"use client";
import React from "react";
import "./globals.css";
import Section from "./Components/Section";
import Carousel from "./Components/CarouselImg";
import Navbar from "./Components/NavBar";
import Marquee from "./Components/Marquee";
import { ContactForm } from "./Components/Form";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="pt-[75px]" />
      <div className="flex items-center justify-center">QUIENES SOMOS</div>
      <Marquee />
      <div id="Services" className="mt-16 flex flex-col items-center w-full">
        <Section title=" VENTA DE PRODUCTOS E INSUMOS" variant="Productos">
          Ventas de insumos de ferretería industrial.
          <br />
          Venta y alquiler de herramientas industriales
        </Section>
        <div className="mt-20" />
        <Section title=" CONSTRUCCIONES EN GENERAL" variant="Construccion">
          Civiles, electromecánicas.
          <br /> Arquitectura industrial e ingeniería para Diseño y proyectos de
          obra Civil y electromecánica. <br />
          Planificación, gestión y proyectos de obra mediante sistema BIM.
          <br /> Construcciones especiales. Montaje, y soldaduras especiales.
          Metalúrgica en general. Módulos estructurales industriales o de
          viviendas.
          <br /> Construcción Tradicional o Sistemas Alternativos, Steel frame,
          cassaforma y panelizado
        </Section>
        <div className="mt-20" />
        <Section title=" MANTENIMIENTO INDUSTRIAL" variant="Mantenimiento">
          Mantenimiento eléctrico y mecánico in-situ, o en taller. <br />
          Automatización. Mantenimiento Edilicio. <br />
          Redes de incendio y sistema de detección. <br />
          Servicio integral mecánico para minería y empresas constructoras.
        </Section>
      </div>
      <div
        id="Contact"
        className="flex flex-col h-[700px] max-w-[1400px] w-full self-center"
      >
        <h1 className="text-5xl font-bold my-20">Contactate con nosotros!</h1>
        <ContactForm />
      </div>
    </div>
  );
}
