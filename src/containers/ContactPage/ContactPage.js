import React from "react";

import classes from "./ContactPage.module.scss";

import { ReactComponent as LinkArrowSVG } from "../../assets/icons/link_arrow.svg";
import { ReactComponent as AustraliaSVG } from "../../assets/icons/australia.svg";

const ContactPage = () => {
  return (
    <div className={classes.contactPage}>
      <div className={classes.contactPage__blackBg}></div>
      <div className={classes.content}>
        <AustraliaSVG className={classes.locationIcon} />
        <div className={classes.borderContainer}>
          <span className={classes.borderContainer__label}>Contact</span>
          <h5 className={classes.topText}>Don't be shy</h5>
          <h1 className={classes.letsBuild}>
            Let's <span className={classes.gold}>build</span> something awesome
          </h1>
          <a href="mailTo:patrick.minda@hotmail.com" className={classes.email}>
            patrick.minda@hotmail.com
          </a>

          <div className={classes.links}>
            <div className={classes.link}>
              <LinkArrowSVG className={classes.link__icon} />
              <span className={classes.link__label}> Resume</span>
            </div>

            <a
              href="https://github.com/Patoreek"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <LinkArrowSVG className={classes.link__icon} />
              <span className={classes.link__label}> Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/patrick-minda-2318a5143
"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <LinkArrowSVG className={classes.link__icon} />
              <span className={classes.link__label}> LinkedIn</span>
            </a>
          </div>
          <div className={classes.basedIn}>
            <h4 className={classes.basedIn__text}>Currently based in:</h4>
            <h4 className={classes.basedIn__location}>Sydney, Australia</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
