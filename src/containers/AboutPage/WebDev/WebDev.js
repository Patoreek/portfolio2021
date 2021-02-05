import React from "react";
import classes from "./WebDev.module.scss";

import laptopImg from "../../../assets/images/laptop.jpg";
import keyboardImg from "../../../assets/images/keyboard_monitors.jpg";

const WebDev = () => {
  return (
    <div className={classes.webDev}>
      <div className={classes.webDev__title}>
        <h3 className={classes.smallTitle}>Junior Fullstack JavaScript</h3>

        <h1 className={classes.largeTitle}>Web Developer</h1>
      </div>
      <img src={laptopImg} className={classes.laptopImg} />

      <div className={classes.splitContainer}>
        <div className={classes.contentContainer}>
          <p className={classes.contentContainer__content}>
            Mauris vel ex ac eros malesuada varius ac semper lorem. Cras commodo
            id felis eget feugiat. Aliquam dictum ligula lacus. Curabitur sed
            nunc dictum, vehicula risus nec, ullamcorper turpis. Fusce vitae
            diam tincidunt lectus semper vehicula. In vulputate risus elit, ut
            congue ante vulputate a. Ut in arcu vitae odio imperdiet efficitur
            eu at velit. Duis nec nisi eu ante finibus varius. Vivamus et eros
            risus. Ut sit amet purus felis. Proin luctus non tellus sed mattis.
            Integer at odio feugiat, pretium turpis at, suscipit dui. Morbi non
            quam libero. Integer eget eleifend risus, ac convallis lorem.
          </p>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.imageContainer__imageContainer}>
            <img src={keyboardImg} className={classes.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
