import React from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//img
import Img1 from '../assets/portfolio-img1.png'
//img
import Img2 from '../assets/portfolio-img2.png'
//img
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                I have experience in developing web applications, mobile
                applications, and desktop applications. I have also experience
                in designing user interfaces and creating user experiences
              </p>
              <button className="btn btn-sm">View all Projects</button>
            </div>
            {/* img */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              {/* pretitle */}
              <div>UI/UI Design</div>
              {/* title */}
              <div>
                <span>Project Title</span>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
