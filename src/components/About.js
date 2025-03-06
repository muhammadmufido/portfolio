import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
//link
import { Link } from 'react-scroll';


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-y-0 lg:gap-x-10 min-h-screen">
        
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-blue-600 font-bold">About me.</h2>
            <h3 className="h3 mb-4">
              I am a beginner software developer and designer from Indonesia. I have been in the software development field for more than 2 years. I have a strong background in programming.
            </h3>
            <p className="mb-6">
              I have experience in developing web applications, mobile applications. I have also experience in designing user interfaces and creating user experiences.
            </p>

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={2} duration={8} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={10} duration={8} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={4} duration={8} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Skills
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <Link to='contact' activeClass='active' smooth={true} spy={true} className="cursor-pointer btn items-center 
                                          justify-center
                                          ">
                <button className="btn btn-sm">
                  Contact Me
                </button>
              </Link>
              <Link to='work' activeClass='active' smooth={true} spy={true} className="cursor-pointer text-gradient btn-link
                                          ">
                My Portfolio
              </Link>
            </div>
          </motion.div>
            {/* img */}
            <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cover lg:bg-contain mix-blend-lighten bg-no-repeat min-h-[400px]  xm:h-[450px] lg:h-[640px] bg-top"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
