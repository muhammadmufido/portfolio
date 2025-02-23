import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 lg:gap-x-10 min-h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cover lg:bg-contain mix-blend-lighten bg-no-repeat min-h-[400px] lg:h-[640px] bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a software developer and designer from Indonesia. I have been
              working in the field of software development for over 2 years. I
              have a strong background in programming.
            </h3>
            <p className="mb-6">
              I have experience in developing web applications, mobile
              applications, and desktop applications. I have also experience in
              designing user interfaces and creating user experiences.
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
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
