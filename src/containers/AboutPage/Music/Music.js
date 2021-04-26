import React from "react";
import classes from "./Music.module.scss";

import img1 from "../../../assets/images/spin-deck.jpg";
import img2 from "../../../assets/images/cassette_tapes.jpg";
import img3 from "../../../assets/images/bars.jpg";
import img4 from "../../../assets/images/dj_decks.jpg";

import { motion } from "framer-motion";

const image1Variants = {
  hidden: {
    y: 250,
  },
  visible: {
    y: 0,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

const image2Variants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      delay: 2.25,
      duration: 1.25,
    },
  },
};

const image3Variants = {
  hidden: {
    y: -1000,
  },
  visible: {
    y: 0,
    transition: {
      delay: 2.25,
      duration: 1,
    },
  },
};

const image4Variants = {
  hidden: {
    x: 250,
  },
  visible: {
    x: 0,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
};

const largeTitleVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

const smallTitleVariants = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.75,
      duration: 1,
    },
  },
};

const content1Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
};

const content2Variants = {
  hidden: {
    opacity: 0,
    y: 250,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
};

const Music = () => {
  return (
    <div className={classes.music}>
      <div className={classes.flexContainer}>
        <div className={classes.flexContainer__image1}>
          <motion.img
            src={img1}
            className={classes.img}
            variants={image1Variants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div className={classes.flexContainer__image2}>
          <motion.img
            src={img2}
            className={classes.img}
            variants={image2Variants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div className={classes.flexContainer__image3}>
          <motion.img
            src={img3}
            className={classes.img}
            variants={image3Variants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div className={classes.flexContainer__image4}>
          <motion.img
            src={img4}
            className={classes.img}
            variants={image4Variants}
            initial="hidden"
            animate="visible"
          />
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.heading}>
          <motion.h1
            className={classes.heading__title}
            variants={largeTitleVariants}
            initial="hidden"
            animate="visible"
          >
            Music Producer
          </motion.h1>
          <motion.p
            className={classes.heading__subtitle}
            variants={smallTitleVariants}
            initial="hidden"
            animate="visible"
          >
            in the making...
          </motion.p>
        </div>
        <motion.div
          className={classes.text1}
          variants={content1Variants}
          initial="hidden"
          animate="visible"
        >
          <p>
            Ut in arcu vitae odio imperdiet efficitur eu at velit. Duis nec nisi
            eu ante finibus varius. Vivamus et eros risus. Ut sit amet purus
            felis. Proin luctus non tellus sed mattis. Integer at odio feugiat,
            pretium turpis at, suscipit dui. Morbi non quam libero. Integer eget
            eleifend risus, ac convallis lorem.
          </p>
        </motion.div>
        <motion.div
          className={classes.text2}
          variants={content2Variants}
          initial="hidden"
          animate="visible"
        >
          <p>
            Ut in arcu vitae odio imperdiet efficitur eu at velit. Duis nec nisi
            eu ante finibus varius. Vivamus et eros risus. Ut sit amet purus
            felis. Proin luctus non tellus sed mattis. Integer at odio feugiat,
            pretium turpis at, suscipit dui. Morbi non quam libero. Integer eget
            eleifend risus, ac convallis lorem.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Music;
