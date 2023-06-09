import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import { listeTemoins } from "../modules/temoins/api";
import { useLang } from "../translate/provider/I18nProvider";
import { FormattedMessage } from "react-intl";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  descriptionFr,
  descriptionEn,
  adress,
  age,
  id,
  prenom,
  nom,
  image,
}) => {
  const {selectedLang} = useLang()
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      whileHover={{ scale:1.1 }}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
  
      <div className="mt-1">
        <p className="text-white text-secondary text-[18px]">{selectedLang === "fr" ? descriptionFr :descriptionEn}</p>
  
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {nom}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {prenom} of {adress}
            </p>
          </div>
  
          <img
            src={image}
            alt={`feedback_by-${nom}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

const Feedbacks = () => {
  const [temoins,setTemoins] = useState([])
  useEffect(() => {
    const load = async () => {
      const data = await listeTemoins()
      if(data) setTemoins(data)
      console.log(data); 
    }
    load()
  }, [])
  
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}><FormattedMessage id="testimonials-sub" /></p>
          <h2 className={styles.sectionHeadText}><FormattedMessage id="testimonials" /></h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 text-secondary  flex flex-wrap gap-7`}>
        {temoins.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
