import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoColor from "../Assets/LogoColor.svg";
const Navbar = () => {
  return (
    <nav className='z-10 bg-black py-4 px-6 flex items-center justify-between text-white absolute w-full'>
      <div className='text-white text-2xl font-bold'>
        <Link href='/'>
          <Image src={LogoColor} alt='Logo' className='h-8' />
        </Link>
      </div>
      <ul className='flex space-x-6'>
        <li>
          <Link href='#Services'>Servicios</Link>
        </li>
        <li>
          <Link href='#AboutUs'>Sobre Nosotros</Link>
        </li>
        <li>
          <Link href='#Contacto'>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
