import React, { useState } from 'react';
import { BiHomeAlt, BiUser, BiMenu } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // state untuk hamburger menu

  const handleLinkClick = () => {
    setIsOpen(false); // tutup menu setelah klik
  };

  return (
    <header className='py-4 w-full fixed top-0 z-50'>
      <div className="container mx-auto">
        <div className="flex items-center justify-end lg:justify-between">
          {/* logo */}
          <a href="#" className='hidden lg:inline '>
            <h1 className='lg:text-[36px] text-[18px] text-blue-700 font-bold'>
              BAYU TRIHARDiAN <br />
              <span className=' text-white'>SYAH</span>
            </h1>
          </a>

         
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
              <BiMenu />
            </button>
          </div>  

          {/* navigasi */}
          <div className={`transition-all duration-300 ${
            isOpen ? 'flex' : 'hidden'
          } flex-col absolute right-4 top-20 bg-white text-black rounded-lg p-4 lg:flex lg:flex-row lg:static lg:bg-transparent lg:text-white`}>
            <Link to='home' smooth={true} spy={true} offset={-200} onClick={handleLinkClick}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BiHomeAlt />
            </Link>

            <Link to='about' smooth={true} spy={true} onClick={handleLinkClick}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BiUser />
            </Link>

            <Link to='services' smooth={true} spy={true} onClick={handleLinkClick}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsClipboardData />
            </Link>

            <Link to='work' smooth={true} spy={true} onClick={handleLinkClick}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsBriefcase />
            </Link>

            <Link to='contact' smooth={true} spy={true} onClick={handleLinkClick}
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <BsChatSquareText />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
