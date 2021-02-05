import React from "react";
import classes from "./Project.module.scss";

const Project = (props) => {
  const year = props.year;
  const title = props.title;
  const subtitle = props.subtitle;
  const image = props.image;

  console.log(image);

  return (
    <div className={classes.project}>
      <div className={classes.project__image}>
        <div className={classes.imageContainer}>
          <img src={image} className={classes.image} />
        </div>
        <span className={classes.year}>{year}</span>
      </div>

      <div className={classes.project__title}>
        <h4 className={classes.title}>{title}</h4>
        <h4 className={classes.subtitle}>{subtitle}</h4>
      </div>
    </div>
  );
};

export default Project;
