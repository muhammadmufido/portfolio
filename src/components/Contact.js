import React, { useRef } from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qed7f35', 'template_qhskgs8', form.current, 'd9Cdw7aB7YEeJtrHb')
      .then((result) => {
        alert('Pesan berhasil dikirim!',
        );
        form.current.reset(); 
      })
      .catch((error) => {
        console.error('Gagal mengirim pesan: ', error);
        alert('Terjadi kesalahan saat mengirim pesan.');
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text Section */}
          <div className='mr-10 mb-6'>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex-1 flex justify-start items-center'
            >
              <div>
                <h4 className='text-xl uppercase text-blue-400 font-medium mb-2 tracking-wide'>
                  Get in touch
                </h4>
                <h2 className='text-[45px] lg:text-[90px] leading-none my-6'>
                  Let's work <br /> together!
                </h2>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max lg:max-auto lg:mx-0'
            >
              <a
                href='https://wa.me/6285602785427?text=Halo%21%20Saya%20melihat%20karya%20Anda%20sangat%20menarik.%20Bisa%20kita%20diskusikan%20peluang%20kolaborasi%3F'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsapp />
              </a>
              <a
                href='https://www.instagram.com/bayu_tri_syh?igsh=NXlhdWVrOW1lYWN3'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram />
              </a>
              <a href='https://github.com/bayu77-app' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email_from'
              placeholder='Your email'
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your message'
              required
            ></textarea>
            <button type='submit' className='btn btn-lg'>
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
