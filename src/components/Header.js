import React, { useState, useRef, useEffect } from "react";
import { BiHomeAlt, BiUser, BiMenu } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Tutup menu saat klik di luar menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="py-4 w-full bg-[#0f0f0f] z-50 fixed top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" className="hidden lg:inline">
            <h1 className="lg:text-[36px] text-[18px] text-blue-700 font-bold">
              BAYU TRIHARDIAN <br />
              <span className="text-white">SYAH</span>
            </h1>
          </a>

          {/* Tombol hamburger */}
          <div className="lg:hidden flex items-center justify-end w-full relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl"
            >
              <BiMenu />
            </button>

            {/* Mobile Menu (muncul di bawah hamburger) */}
            {isOpen && (
              <div
                ref={menuRef}
                className="absolute top-full right-0 mt-2 flex flex-col items-end gap-4 p-4 z-40"
              >
                <NavLinks handleClick={handleLinkClick} />
              </div>
            )}
          </div>

          {/* Desktop Nav (Dikembalikan ke posisi semula) */}
          <nav className="hidden lg:flex gap-x-6 text-white items-center">
            <Link
              to="home"
              smooth={true}
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-blue-600"
            >
              <BiHomeAlt size={24} />
            </Link>
            <Link
              to="about"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-blue-600"
            >
              <BiUser size={24} />
            </Link>
          
            <Link
              to="work"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-blue-600"
            >
              <BsBriefcase size={24} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              className="cursor-pointer hover:text-blue-600"
            >
              <BsChatSquareText size={24} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ handleClick }) => (
  <div>
    <Link
      to="home"
      smooth={true}
      spy={true}
      offset={-70}
      onClick={handleClick}
      className="cursor-pointer text-2xl hover:text-blue-600"
    >
      <BiHomeAlt />
    </Link>
    <Link
      to="about"
      smooth={true}
      spy={true}
      onClick={handleClick}
      className="cursor-pointer text-2xl hover:text-blue-600"
    >
      <BiUser />
    </Link>
   
    <Link
      to="work"
      smooth={true}
      spy={true}
      onClick={handleClick}
      className="cursor-pointer text-2xl hover:text-blue-600"
    >
      <BsBriefcase />
    </Link>
    <Link
      to="contact"
      smooth={true}
      spy={true}
      onClick={handleClick}
      className="cursor-pointer text-2xl hover:text-blue-600"
    >
      <BsChatSquareText />
    </Link>
  </div>
);

export default Header;
