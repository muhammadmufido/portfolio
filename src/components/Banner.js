import React from "react";
// Gambar profil bebas lisensi atau custom
import image from "../assets/avatar2.png";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 to-slate-800" id="home">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* Text Section */}
       

          {/* Image Section */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            className="flex-1 flex justify-center"
          >
            <img src={image} alt="Bayu Tri" className="w-64 h-64 object-cover rounded-full border-4 border-blue-600 shadow-lg" />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Hello, I'm <span className="text-blue-500">Bayu Tri</span>
            </h1>
            <div className="text-xl sm:text-2xl text-gray-300 mb-4">
              I'm a passionate&nbsp;
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={40}
                className="text-blue-400 font-semibold"
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-6">
              Siswa SMK jurusan Rekayasa Perangkat Lunak yang fokus pada pengembangan web dan aplikasi mobile. Siap belajar dan tumbuh di dunia teknologi.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 ">
              <Link to="contact" smooth spy className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg ">
                Hubungi Saya
              </Link>
              <Link to="work" smooth spy className="btn-link text-blue-300 hover:underline text-sm font-semibold text-center self-center">
                Lihat Portofolio
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
