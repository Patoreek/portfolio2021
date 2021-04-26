import React, { useContext } from "react";
import classes from "./AboutPage.module.scss";

import NextSlide from "../../components/NextSlide/NextSlide";

import AboutMe from "./AboutMe/AboutMe";
import WebDev from "./WebDev/WebDev";
import Music from "./Music/Music";
import Travel from "./Travel/Travel";
import Hobbies from "./Hobbies/Hobbies";

import { SlideContext } from "../../context/GlobalContext";

import { motion } from "framer-motion";

const AboutPage = () => {
  const [slide, setSlide] = useContext(SlideContext);

  const sliderVariants = {
    hidden: {
      x: "-80vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        type: "string",
        stiffness: 120,
      },
    },
  };

  return (
    <div className={classes.aboutPage}>
      <NextSlide />
      <div className={classes.aboutPage__nextSlideBox}></div>
      {slide == "AboutMe" ? (
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
        >
          <AboutMe />
        </motion.div>
      ) : null}
      {slide == "WebDev" ? (
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
        >
          <WebDev />
        </motion.div>
      ) : null}
      {slide == "Music" ? (
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
        >
          <Music />
        </motion.div>
      ) : null}
      {slide == "Travel" ? (
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
        >
          <Travel />
        </motion.div>
      ) : null}
      {slide == "Hobbies" ? (
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
        >
          <Hobbies />
        </motion.div>
      ) : null}

      {/* <WebDev/>
      <Music/>
      <Travel/>
      <Hobbies/> */}
    </div>
  );
};

export default AboutPage;
