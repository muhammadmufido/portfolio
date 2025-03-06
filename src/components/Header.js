import React from 'react';
import logo from '../assets/logo.svg';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
//link
import { Link } from 'react-scroll';


const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <h1 className='lg:text-[36px] sm::text-[18px] text-blue-500  font-bold'>BAYU TRIHARDiAN <br /> SYAH</h1>
        </a>
        {/* button */}
        <Link to='contact' activeClass='active' smooth={true} spy={true} className="cursor-pointer btn items-center 
                 justify-center
                 ">
          <button className="btn btn-sm">
            Work with me
          </button>
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
