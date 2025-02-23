import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs'
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//services
const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "Learn more",
  },
  {
    name: "frontend development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "Learn more",
  },
  {
    name: "mobile app development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    Link: "Learn more",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h2 className="">
              What I Do.
            </h2>
          </div>
          {/* services */}
          <div>Services</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
