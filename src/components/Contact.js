import React, { useRef } from "react";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qed7f35",
        "template_qhskgs8",
        form.current,
        "d9Cdw7aB7YEeJtrHb"
      )
      .then((result) => {
        alert("Pesan berhasil dikirim!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Gagal mengirim pesan: ", error);
        alert("Terjadi kesalahan saat mengirim pesan.");
      });
  };

  return (
    <section className="py-16 lg:section bg-gradient-to-b from-slate-900 to-slate-800" id="contact">
     
      <div className="container mx-auto">
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <div className="mr-10 mb-6">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h2 className="text-[45px] lg:text-[90px] leading-none my-6">
                  Hubungi Saya
                  <br /> segera!
                </h2>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max lg:max-auto lg:mx-0"
            >
              <a
                href="https://wa.me/6285602785427?text=Halo%21%20Saya%20melihat%20karya%20Anda%20sangat%20menarik.%20Bisa%20kita%20diskusikan%20peluang%20kolaborasi%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/bayu_tri_syh?igsh=NXlhdWVrOW1lYWN3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/bayu77-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-white">Hubungi Saya</h3>

            <input
              className="bg-transparent border border-white/30 focus:border-accent text-white rounded-xl py-3 px-4 placeholder:text-white/60 focus:outline-none transition-all"
              type="email"
              name="email_from"
              placeholder="Your email address"
              required
            />

            <textarea
              className="bg-transparent border border-white/30 focus:border-accent text-white rounded-xl py-4 px-4 placeholder:text-white/60 resize-none focus:outline-none transition-all"
              name="message"
              placeholder="Write your message here..."
              rows={6}
              required
            ></textarea>

            <button
              type="submit"
              className="self-end btn hover:btn text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md transition-all"
            >
              Kirim
            </button>
          </motion.form>
        </div>
      </div>
     
      <div>
      <p className="text-sm text-gray-500 text-center mt-8">
         © {new Date().getFullYear()} <a href="https://www.instagram.com/bayu_tri_syh?igsh=NXlhdWVrOW1lYWN3" className="text-blue-500">
         Bayu Trihardian Syah
          </a>. Desain terinspirasi oleh <a href="https://www.youtube.com/watch?v=Hps-XPN1GeE" className="text-blue-500">
          Cristian Mihai</a>.
    </p>
      </div>
      </div>
    </section>
  );
};

export default Contact;
