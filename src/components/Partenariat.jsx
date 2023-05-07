import React from "react";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { nexta,mndpt,novity,telma,full,pulse,ph,instit,eng,nect,inclu,engenog} from "../assets";

const Partenaire = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Partenaires</h2>
      </motion.div>
     
      <div className="m-0 p-12 flex flex-col justify-center">
        <div className="sm:grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1">
            <div className="flex flex-col rounded-md justify-center items-center bg-white uppercase h-40 min-h-full text-white  flex col-span-2 md:row-span-2 md:col-span-1 md:col-start-1 md:row-start-1">
                <img src={nexta} alt="nexta" className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-40 min-h-full  md:flex md:row-span-1 md:col-span-2 md:col-start-2 md:row-start-1">
                <img src={mndpt} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-[#FF3543] text-white hidden  h-60 min-h-full md:flex md:row-span-1 md:col-span-1 md:col-start-2 md:row-start-2">
            <img src={ph} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            
            </div>
            
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full md:flex md:row-span-1 md:col-span-1 md:col-start-3 md:row-start-2">
            
            <img src={telma} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full lg:flex lg:col-span-1 lg:col-start-4 lg:row-start-1">
            <img src={full} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-[#E53520] text-white hidden h-60 min-h-full lg:flex lg:col-span-1 lg:col-start-4 lg:row-start-2 xl:col-span-2">
            <img src={pulse} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full xl:flex xl:col-span-1 xl:col-start-5 xl:row-start-1">
            <img src={novity} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full xl:flex xl:col-span-1 xl:col-start-5 xl:row-start-1">
            <img src={eng} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full xl:flex xl:col-span-1 xl:col-start-5 xl:row-start-1">
            <img src={novity} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>

            
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full 2xl:flex 2xl:row-span-2 2xl:col-span-1 2xl:col-start-6 2xl:row-start-1">
            
            <img src={engenog} alt="nexta" className="w-full h-full object-contain rounded-md" />
            </div>
        
        </div>
        <div className="sm:grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 mt-7">
            <div className="flex flex-col rounded-md justify-center items-center bg-[#0B1E49] uppercase h-40 min-h-full text-white  flex col-span-2 md:row-span-2 md:col-span-1 md:col-start-1 md:row-start-1">
                <img src={eng} alt="nexta" className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-[#01568F] text-white hidden h-60 min-h-full lg:flex lg:col-span-1 lg:col-start-4 lg:row-start-2 xl:col-span-2">
            <img src={nect} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full lg:flex lg:col-span-1 lg:col-start-4 lg:row-start-2 xl:col-span-2">
            <img src={engenog} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
            <div className="flex flex-col rounded-md justify-center items-center uppercase bg-white text-white hidden h-60 min-h-full lg:flex lg:col-span-1 lg:col-start-4 lg:row-start-2 xl:col-span-2">
            <img src={inclu} alt="mdpt" className="w-full h-full rounded-md object-contain" />
            </div>
        </div>
      </div>
      
    </>
  );
};

export default SectionWrapper(Partenaire, "partenaire");
