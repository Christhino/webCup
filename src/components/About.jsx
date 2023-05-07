import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { dreamInstitute, logo, pose } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FormattedMessage } from "react-intl";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-[150px] object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} whileHover={{ scale:1.2 }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}><FormattedMessage id="national-dream-institute" /></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
       
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        <motion.p whileHover={{ scale:1.2 }}> 
        <FormattedMessage id="national-dream-institute-intro" />
        </motion.p>
        <motion.div  whileHover={{ scale:1.2 }}> 
          <div className="flex justify-center mt-10">
            <img src={dreamInstitute} />
          </div>
        </motion.div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 mb-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
      <motion.div  whileHover={{ scale:1.2 }}> 
        <div className="col-span-1">
          <img
            src={logo}
            alt="github"
            className="onix w-[600px] h-full object-contain"
          />
        </div>
        </motion.div>
        <div className="col-span-1">
          <motion.div variants={textVariant()} whileHover={{ scale:1.2 }}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}><FormattedMessage id="onirix-intro-question" /></h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            whileHover={{ scale:1.2 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            <FormattedMessage id="onirix-intro-desc" />
          </motion.p>
        </div>
      </div>


    </>
  );
};

export default SectionWrapper(About, "about");
