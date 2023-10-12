"use client";

import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationData: any; // Puedes ajustar el tipo según tu archivo JSON de animación.
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg", // Puedes ajustar esto según tus necesidades.
        loop: false, // Si quieres que la animación se repita.
        autoplay: true, // Si quieres que la animación se reproduzca automáticamente al cargar la página.
        animationData, // El archivo JSON de animación importado.
      });

      return () => {
        anim.destroy(); // Limpia la animación cuando el componente se desmonta.
      };
    }
  }, [animationData]);

  return <div ref={containerRef} className="flex self-center w-[1000px] opacity-25" />;
};

export default LottieAnimation;
