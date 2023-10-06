

import React from "react";



import Image from "next/image";
import Services from "./Components/Services";
import Section from "./Components/Section";



export default function Home() {
  return (
    <div>
      {/* contenedor general */}
    
      <div className='bg-black flex flex-row'>
        <div className='text-white'>aca va e texto full facha a</div>
        <Carousel />
      </div>
      <Services />
      <Section title=' VENTA DE PRODUCTOS E INSUMOS' variant="Productos">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed vehicula urna nec leo bibendum.
      </Section>
      <Section title=' VENTA DE PRODUCTOS E INSUMOS' variant="Construccion">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed vehicula urna nec leo bibendum.
      </Section>
      <Section title=' VENTA DE PRODUCTOS E INSUMOS' variant="Materiales">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed vehicula urna nec leo bibendum.
      </Section>
    </div>
  );
}
