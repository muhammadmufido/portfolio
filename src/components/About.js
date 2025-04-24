import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode className="text-indigo-500 text-3xl mb-2" />,
    name: "Frontend Web Development",
    desc: "Membuat antarmuka website yang dinamis dan responsif dengan HTML, CSS, JavaScript, React, dan Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-500 text-3xl mb-2" />,
    name: "Mobile App Development",
    desc: "Mengembangkan aplikasi mobile modern menggunakan Flutter untuk Android dan iOS.",
  },
  {
    icon: <FaPalette className="text-indigo-500 text-3xl mb-2" />,
    name: "UI/UX Design",
    desc: "Mendesain tampilan dan pengalaman pengguna yang menarik dan intuitif untuk berbagai platform digital.",
  },
];

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-slate-950 to-slate-800 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-3">
            Tentang <span className="text-indigo-400">Saya</span>
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Saya adalah seorang pelajar SMK jurusan PPLG dari Jepara yang sedang menekuni dunia pemrograman dan desain.
          </p>
          <p className="text-gray-400 mb-6">
            Saat ini saya fokus mengembangkan website, aplikasi mobile, dan desain UI/UX. Saya senang mengeksplorasi teknologi baru dan membangun proyek kreatif.
          </p>

          {/* Counter */}
          <div className="flex gap-x-10 mb-8">
            <div>
              <h3 className="text-4xl font-bold text-indigo-400">
                {inView && <CountUp start={0} end={2} duration={3} />}+
              </h3>
              <p className="text-sm text-white/60">Tahun Belajar</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-400">
                {inView && <CountUp start={0} end={10} duration={3} />}+
              </h3>
              <p className="text-sm text-white/60">Proyek Selesai</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-400">
                {inView && <CountUp start={0} end={3} duration={5} />}+
              </h3>
              <p className="text-sm text-white/60">Skill Dikuasai</p>
            </div>
          </div>

          <Link to="contact" smooth spy>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded text-white transition duration-200">
              Hubungi Saya
            </button>
          </Link>
        </motion.div>

        {/* RIGHT CONTENT - SKILLS */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          className="flex-1"
        >
          <h3 className="text-3xl font-semibold mb-6">Keahlian Saya</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-5 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="">{skill.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{skill.name}</h4>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
