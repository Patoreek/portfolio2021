import React from "react";
import classes from "./AboutMe.module.scss";
import Polaroid from "../../../components/Polaroid/Polaroid";

import { motion } from "framer-motion";

const patrickBgVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 0.2,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

const mindaBgVariants = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 0.2,
    transition: {
      delay: 1.75,
      duration: 1.75,
    },
  },
};

const contentContainerVariants = {
  hidden: {
    x: "70rem",
  },
  visible: {
    x: 0,
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};

const myNameVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4,
      duration: 0.25,
    },
  },
};

const myAgeVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.25,
      duration: 0.25,
    },
  },
};

const myDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4.5,
      duration: 0.25,
    },
  },
};

const AboutMe = () => {
  const age = 24;

  return (
    <div className={classes.aboutMe}>
      <div className={classes.polaroids}>
        <div className={classes.polaroids__1}>
          <Polaroid />
        </div>
        <div className={classes.polaroids__2}>
          <Polaroid />
        </div>
        <div className={classes.polaroids__3}>
          <Polaroid />
        </div>
      </div>
      <motion.p
        className={classes.aboutMe__largeTextPat}
        variants={patrickBgVariants}
        initial="hidden"
        animate="visible"
      >
        Patrick
      </motion.p>
      <motion.p
        className={classes.aboutMe__largeTextMin}
        variants={mindaBgVariants}
        initial="hidden"
        animate="visible"
      >
        Minda
      </motion.p>
      <motion.div
        className={classes.content}
        variants={contentContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className={classes.content__title}
          variants={myNameVariants}
          initial="hidden"
          animate="visible"
        >
          My name is Patrick Minda.
        </motion.h2>
        <motion.h4
          className={classes.content__subtitle}
          variants={myAgeVariants}
          initial="hidden"
          animate="visible"
        >
          I am {age} years old.
        </motion.h4>
        <motion.p
          className={classes.content__description}
          variants={myDescriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat mi sem, sit amet malesuada tellus feugiat vel. Donec semper,
          velit vel imperdiet ultrices, velit lectus interdum metus, sagittis
          dignissim orci turpis eget lacus. Nunc quis nisl vel turpis vulputate
          elementum non nec sem. Sed convallis ac risus at rhoncus.{" "}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
