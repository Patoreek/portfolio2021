import React from "react";
import classes from "./Polaroid.module.scss";

import sydneyImg from "../../assets/images/Sydney_001.jpg";

const Polaroid = () => {
  return (
    <div className={classes.polaroid}>
      <div className={classes.polaroid__image}>
        <img src={sydneyImg} className={classes.image} />
      </div>
    </div>
  );
};

export default Polaroid;
