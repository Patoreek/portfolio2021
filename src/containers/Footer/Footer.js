import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__links}>
        <a
          href="https://github.com/Patoreek"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-minda-2318a5143
"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          LinkedIn
        </a>
        <a
          href="https://www.locusdive.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          Locus
        </a>
      </div>
      <div className={classes.footer__copyright}>
        <span className={classes.text}>
          Built with React by Patrick Minda · Patrick Minda 2020©{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
