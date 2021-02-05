import React from "react";
import classes from "./AboutMe.module.scss";

import Polaroid from "../../../components/Polaroid/Polaroid";

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
      <p className={classes.aboutMe__largeTextPat}>Patrick</p>
      <p className={classes.aboutMe__largeTextMin}>Minda</p>
      <div className={classes.content}>
        <h2 className={classes.content__title}>My name is Patrick Minda.</h2>
        <h4 className={classes.content__subtitle}>I am {age} years old.</h4>
        <p className={classes.content__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          volutpat mi sem, sit amet malesuada tellus feugiat vel. Donec semper,
          velit vel imperdiet ultrices, velit lectus interdum metus, sagittis
          dignissim orci turpis eget lacus. Nunc quis nisl vel turpis vulputate
          elementum non nec sem. Sed convallis ac risus at rhoncus.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
