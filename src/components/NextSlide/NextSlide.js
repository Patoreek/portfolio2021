import React, { useContext, useEffect, useState } from "react";
import classes from "./NextSlide.module.scss";

import { ReactComponent as ArrowSVG } from "../../assets/icons/slide_arrow.svg";

import webDevImg from "../../assets/images/keyboard_monitors.jpg";

import { SlideContext } from "../../context/GlobalContext";
import { motion } from "framer-motion";

const NextSlide = () => {
  const [slide, setSlide] = useContext(SlideContext);

  const [title, setTitle] = useState("");

  const [topNum, setTopNum] = useState("");
  const [botNum, setBotNum] = useState("5");

  useEffect(() => {
    switch (slide) {
      case "AboutMe":
        setTitle("Web Dev");
        setTopNum("1");
        break;
      case "WebDev":
        setTitle("Music");
        setTopNum("2");
        break;
      case "Music":
        setTitle("Travel");
        setTopNum("3");
        break;
      case "Travel":
        setTitle("Hobbies");
        setTopNum("4");
        break;
      case "Hobbies":
        setTitle("About Me");
        setTopNum("5");
        break;
    }
  }, [slide]);

  const nextSlideHandler = () => {
    // console.log("Next Slide");
    switch (slide) {
      case "AboutMe":
        setSlide("WebDev");
        break;
      case "WebDev":
        setSlide("Music");
        break;
      case "Music":
        setSlide("Travel");
        break;
      case "Travel":
        setSlide("Hobbies");
        break;
      case "Hobbies":
        setSlide("AboutMe");
        break;
    }
  };

  return (
    <motion.div
      className={classes.nextSlide} /* whileTap={{ width: "100vw" }} */
    >
      <img src={webDevImg} className={classes.nextSlide__image} />
      <div className={classes.content}>
        <div className={classes.content__title}>
          <h2 className={classes.title}>{title}</h2>
        </div>
        <div className={classes.number}>
          <span className={classes.number__topNum}>{topNum}</span>
          <span className={classes.number__botNum}>{botNum}</span>
        </div>
        <div className={classes.content__arrow} onClick={nextSlideHandler}>
          <ArrowSVG className={classes.arrow} />
        </div>
        <div className={classes.content__nextSlide} onClick={nextSlideHandler}>
          <p>Next Slide</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NextSlide;
