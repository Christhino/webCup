import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto sm:px-0 px-6 flex flex-row items-center gap-5`}
      >
        <div className="flex gap-5">
          <div className="flex flex-col items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <motion.h1 whileHover={{ scale:1.2 }}>  
              <h1 className={`${styles.heroHeadText} text-white titre`}>
                <FormattedMessage id="header-part-1" />   <span className="text-[#915EFF]"><FormattedMessage id="header-part-2" /></span>
              </h1>
            </motion.h1>
            <motion.p whileHover={{ scale:1.2 }}> 
            <p className={`${styles.heroSubText} mt-2 text-white-100 intro`}>
              <FormattedMessage id="header-description-part-1" />  <br className="sm:block hidden" /> <FormattedMessage id="header-description-part-2" />
            </p>
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            src={github}
            alt="github"
            className="image-AI w-[1200px] h-full object-contain"
          />
        </div>
      </div>



      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
