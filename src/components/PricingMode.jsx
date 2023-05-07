import React from "react";

import { motion } from "framer-motion";


import { styles } from "../styles";
import { experiences, experiencesEnglish } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FormattedMessage, useIntl } from "react-intl";

const Pricing = () => {

  const { locale } = useIntl();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}><FormattedMessage id="onirix-workflow-subtitle"/></p>
        <h2 className={styles.sectionHeadText}><FormattedMessage id="onirix-workflow-title"/></h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
         
      </div>
    </>
  );
};

export default SectionWrapper(Pricing, "price");
