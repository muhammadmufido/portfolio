import React from "react";
// image
import image from "../assets/avatar.svg";
// icons
import { FaGithub, FaYoutube, FaDribbble, FaInstagram, FaWhatsapp } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
//link
import { Link } from 'react-scroll';




const Banner = () => {
  return (
    <section className="min-h-[85vh] min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-y-8 lg:gap-x-12">
        
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt="" className="max-w-sm lg:max-w-md" />
          </motion.div>

            {/* text */}
            <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[100px]"
            >
              BAYU <span className="text-blue-500">TRI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">Saya seorang</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-blue-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Saya seorang siswa sekolah menengah kejuruan jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki minat dalam pengembangan perangkat lunak.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to='contact' activeClass='active' smooth={true} spy={true} className="cursor-pointer btn items-center 
                             justify-center
                             ">
                <button className="btn btn-sm">
                  Contact Me
                </button>
              </Link>
              <Link to='work' activeClass='active' smooth={true} spy={true} className="cursor-pointer text-blue-400 font-semibold btn-link
                             ">
                My Portfolio
              </Link>
            </motion.div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
