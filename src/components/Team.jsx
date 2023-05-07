import { useState } from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { staggerContainer } from '../utils/motion';
import { motion } from 'framer-motion';
import { exploreWorlds } from '../constants';
// import styles from '../styles'; 
import { ExploreCard, TitleText, TypingText } from '../components';
import { FormattedMessage } from 'react-intl';

const Team = () => {
  const [active, setActive] = useState('world-2');
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<><FormattedMessage id="our-team" /></>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              OnMouseOver={setActive}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Team, "team");

