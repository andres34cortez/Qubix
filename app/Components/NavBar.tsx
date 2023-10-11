"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoColor from "../Assets/LogoColor.svg";

export default function Navbar() {
  /*   const [navHidden, setNavHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); */

  /*   useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); */

  const scrollTo = (id: string) => {
    const servicesSection = document.getElementById(id);
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={` flex fixed flex-row justify-between z-10 py-3 px-16 w-full border-b border-[#E5E7EB] shadow-[1px_-3px_50px_5px_rgba(230,230,230,0.6)] transition-transform duration-300 bg-white `}
    >
      <Link href='/'>
        <Image src={LogoColor} alt='Logo' className='w-[110px]' />
      </Link>
      <ul className='flex space-x-6 items-center '>
        <li>
          <h1
            onClick={() => scrollTo("Services")}
            className='text-[#303030] hover:text-black cursor-pointer hover:font-medium duration-300'
          >
            Servicios
          </h1>
        </li>
        <li>
          <h1
            onClick={() => scrollTo("Contact")}
            className='text-[#303030] hover:text-black cursor-pointer hover:font-medium duration-300'
          >
            Contacto
          </h1>
        </li>
      </ul>
    </nav>
  );
}
