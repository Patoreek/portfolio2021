import React from "react";
import classes from "./Hobbies.module.scss";

import img1 from "../../../assets/images/lewan.jpg";
import img2 from "../../../assets/images/ps5.jpg";
import img3 from "../../../assets/images/gsp.jpg";

const Hobbies = () => {
  return (
    <div className={classes.hobbies}>
      <div className={classes.flexContainer}>
        <div className={classes.flexContainer__image1}>
          <img src={img1} className={classes.img} />
        </div>
        <div className={classes.flexContainer__image2}>
          <img src={img2} className={classes.img} />
        </div>
        <div className={classes.flexContainer__image3}>
          <img src={img3} className={classes.img} />
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.heading}>
          <h1 className={classes.heading__title}>Enjoy the moment</h1>
          <p className={classes.heading__subtitle}>always learning...</p>
        </div>
        <div className={classes.text1}>
          <p>
            Ut in arcu vitae odio imperdiet efficitur eu at velit. Duis nec nisi
            eu ante finibus varius. Vivamus et eros risus. Ut sit amet purus
            felis. Proin luctus non tellus sed mattis. Integer at odio feugiat,
            pretium turpis at, suscipit dui. Morbi non quam libero. Integer eget
            eleifend risus, ac convallis lorem.
            <br />
            Ut in arcu vitae odio imperdiet efficitur eu at velit. Duis nec nisi
            eu ante finibus varius. Vivamus et eros risus. Ut sit amet purus
            felis. Proin luctus non tellus sed mattis. Integer at odio feugiat,
            pretium turpis at, suscipit dui. Morbi non quam libero. Integer eget
            eleifend risus, ac convallis lorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
