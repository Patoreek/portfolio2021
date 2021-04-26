import React from "react";
import classes from "./WebDev.module.scss";

import laptopImg from "../../../assets/images/laptop.jpg";
import keyboardImg from "../../../assets/images/keyboard_monitors.jpg";

import { motion } from "framer-motion";

const smallTitleVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

const largeTitleVariants = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};

const laptopVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};

const splitContainerVariants = {
  hidden: {
    y: 500,
  },
  visible: {
    y: 0,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};

const contentVariants = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2.15,
    },
  },
};
const WebDev = () => {
  return (
    <div className={classes.webDev}>
      <div className={classes.webDev__title}>
        <motion.h3
          className={classes.smallTitle}
          variants={smallTitleVariants}
          initial="hidden"
          animate="visible"
        >
          Junior Fullstack JavaScript
        </motion.h3>

        <motion.h1
          className={classes.largeTitle}
          variants={largeTitleVariants}
          initial="hidden"
          animate="visible"
        >
          Web Developer
        </motion.h1>
      </div>
      <motion.img
        src={laptopImg}
        className={classes.laptopImg}
        variants={laptopVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className={classes.splitContainer}
        variants={splitContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={classes.contentContainer}>
          <motion.p
            className={classes.contentContainer__content}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            Mauris vel ex ac eros malesuada varius ac semper lorem. Cras commodo
            id felis eget feugiat. Aliquam dictum ligula lacus. Curabitur sed
            nunc dictum, vehicula risus nec, ullamcorper turpis. Fusce vitae
            diam tincidunt lectus semper vehicula. In vulputate risus elit, ut
            congue ante vulputate a. Ut in arcu vitae odio imperdiet efficitur
            eu at velit. Duis nec nisi eu ante finibus varius. Vivamus et eros
            risus. Ut sit amet purus felis. Proin luctus non tellus sed mattis.
            Integer at odio feugiat, pretium turpis at, suscipit dui. Morbi non
            quam libero. Integer eget eleifend risus, ac convallis lorem.
          </motion.p>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.imageContainer__imageContainer}>
            <motion.img
              src={keyboardImg}
              className={classes.image}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WebDev;
