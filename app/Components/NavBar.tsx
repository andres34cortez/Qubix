import React, { useState } from "react";
import Image from "next/image";
import LogoColor from "../Assets/LogoColor.svg";
import instagram from "../Assets/instagram.svg";
import linkedin from "../Assets/linkedin.svg";
import menuIcon from "../Assets/menu.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`flex lg:fixed flex-row justify-between items-center z-50 py-3 px-4 md:px-16 lg:w-full border-b border-[#E5E7EB] shadow-[1px_-3px_50px_5px_rgba(120,120,120,0.1)] transition-transform duration-300 bg-white`}
    >
      <div onClick={() => scrollTo("Home")} className='cursor-pointer'>
        <Image src={LogoColor} alt='Logo' className='w-[110px]' />
      </div>
      <div className='md:flex space-x-6 items-center hidden'>
        <div className='flex flex-row mr-8'>
          <a
            href='https://www.instagram.com/qubixsas/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={instagram}
              alt=''
              className='w-[24px] mr-4 cursor-pointer'
            />
          </a>
          <a
            href='https://www.linkedin.com/company/qubixconstrucciones/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={linkedin} alt='' className='w-[24px] cursor-pointer' />
          </a>
        </div>
        <li style={{ listStyleType: "none" }}>
          <h1
            onClick={() => scrollTo("Services")}
            className='text-[#303030] hover:text-black cursor-pointer hover:font-medium duration-300'
          >
            Servicios
          </h1>
        </li>
        <li style={{ listStyleType: "none" }}>
          <h1
            onClick={() => scrollTo("Contact")}
            className='text-[#303030] hover:text-black cursor-pointer hover:font-medium duration-300'
          >
            Contacto
          </h1>
        </li>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='cursor-pointer'>
          <Image src={menuIcon} alt='Menu' className='w-[24px]' />
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 right-0 bg-white w-60 shadow-md'>
          <ul className='p-4 space-y-4'>
            <li>
              <h1
                onClick={() => scrollTo("Servicesm")}
                className='cursor-pointer'
              >
                Servicios
              </h1>
            </li>
            <li>
              <h1
                onClick={() => scrollTo("Contactm")}
                className='cursor-pointer'
              >
                Contacto
              </h1>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
