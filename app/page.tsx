import React from "react";
import './globals.css';
import Services from "./Components/Services";
import Section from "./Components/Section";
import Carousel from "./Components/CarouselImg";
export default function Home() {
  return (
    <div>
      {/* contenedor general */}

      <div className='bg-black flex flex-row'>
        <div className='text-white'>aca va e texto full facha a</div>
        <Carousel />
      </div>
      <Services />
      <Section title=' VENTA DE PRODUCTOS E INSUMOS' variant='Productos'>
        Ventas de insumos de ferretería industrial.
        <br />
        Venta y alquiler de herramientas industriales
      </Section>
      <Section title=' CONSTRUCCIONES EN GENERAL' variant='Construccion'>
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
      <Section title=' MANTENIMIENTO INDUSTRIAL' variant='Mantenimiento'>
        Mantenimiento eléctrico y mecánico in-situ, o en taller. <br />
        Automatización. Mantenimiento Edilicio.  <br />
        Redes de incendio y sistema de detección.  <br />
        Servicio integral mecánico para minería y empresas constructoras.
      </Section>
    </div>
  );
}
