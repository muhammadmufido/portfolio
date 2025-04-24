// import React from 'react';
// //icon
// import { BsArrowUpRight } from 'react-icons/bs'
// //motion
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import { BiHomeAlt, BiUser } from 'react-icons/bi';
// import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
// //link
// import { Link } from 'react-scroll';

// //services
// const services = [
//     {
//       name: "Frontend Development",
//       description:
//         "Membangun antarmuka web modern menggunakan teknologi terbaru seperti html5, css, js, laravel, React.js, Tailwind CSS, dan lainnya untuk pengalaman pengguna yang optimal.",
//       Link: "Learn more",
//     },
//     {
//       name: "Mobile App Development",
//       description:
//         "Mengembangkan aplikasi mobile berkinerja tinggi dengan Flutter, menghadirkan solusi inovatif yang kompatibel di berbagai perangkat.",
//       Link: "Learn more",
//     },
//     {
//       name: "UI/UX Design",
//       description:
//         "Merancang antarmuka yang intuitif dan estetis dengan fokus pada pengalaman pengguna yang mudah, menarik, dan efisien.",
//       Link: "Learn more",
//     },
//   ];


// const Services = () => {
//   return (
//     <div className="section" id="services">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text dan image*/}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
//           >
//             <h2 className="h2 text-blue-200 mb-6">What I Do.</h2>
//             <h3 className="h3 max-w-[455px] mb-16">
//               I have experience in developing web applications, mobile
//               applications. I have also experience in
//               designing user interfaces and creating user experiences.
//             </h3>
//             <Link to='work' activeClass='active' smooth={true} spy={true} className="cursor-pointer btn items-center 
//                                        justify-center
//                                        ">
//               <button className="btn btn-sm">
//                 See my work
//               </button>
//             </Link>
//           </motion.div>
//           {/* services */}
//           <motion.div
//             variants={fadeIn("left", 0.5)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1"
//           >
//             {/* services list */}
//             <div>
//               {services.map((service, index) => {
//                 //destrukture service
//                 const { name, description, Link } = service;
//                 return (
//                   <div
//                     className="border-b border-white/20 h-[146px] mb-[50px] flex items-center justify-between"
//                     key={index}
//                   >
//                     <div className="max-w-[476px]">
//                       <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
//                         {name}
//                       </h4>
//                       <p className="font-secondary leading-light">
//                         {description}
//                       </p>
//                     </div>
//                     <div className="flex flex-col flex-1 items-end">
//                       <a
//                         href="#"
//                         className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
//                       >
//                         <BsArrowUpRight />
//                       </a>
//                       <a href="#" className="cursor-pointer text-white font-semibold btn-link">
//                         {Link}
//                       </a>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
