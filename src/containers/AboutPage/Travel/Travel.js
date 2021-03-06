import React from "react";
import classes from "./Travel.module.scss";

import img1 from "../../../assets/images/utrecht.jpg";
import img2 from "../../../assets/images/egypt.jpg";
import img3 from "../../../assets/images/island.jpg";
import img4 from "../../../assets/images/diving.jpg";

const Travel = () => {
  return (
    <div className={classes.travel}>
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
        <div className={classes.flexContainer__image4}>
          <img src={img4} className={classes.img} />
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.heading}>
          <h1 className={classes.heading__title}>Adventurer</h1>
          <p className={classes.heading__subtitle}>land and sea...</p>
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

export default Travel;
