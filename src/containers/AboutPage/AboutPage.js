import React, { useContext } from "react";
import classes from "./AboutPage.module.scss";

import NextSlide from "../../components/NextSlide/NextSlide";

import AboutMe from "./AboutMe/AboutMe";
import WebDev from "./WebDev/WebDev";
import Music from "./Music/Music";
import Travel from "./Travel/Travel";
import Hobbies from "./Hobbies/Hobbies";

import { SlideContext } from "../../context/GlobalContext";

const AboutPage = () => {
  const [slide, setSlide] = useContext(SlideContext);

  return (
    <div className={classes.aboutPage}>
      <NextSlide />
      <div className={classes.aboutPage__nextSlideBox}></div>
      {slide == "AboutMe" ? <AboutMe /> : null}
      {slide == "WebDev" ? <WebDev /> : null}
      {slide == "Music" ? <Music /> : null}
      {slide == "Travel" ? <Travel /> : null}
      {slide == "Hobbies" ? <Hobbies /> : null}

      {/* <WebDev/>
      <Music/>
      <Travel/>
      <Hobbies/> */}
    </div>
  );
};

export default AboutPage;
