import React, { useState, useContext } from "react";
import classes from "./Navbar.module.scss";

import { PageContext } from "../../context/GlobalContext";

const Navbar = () => {
  const [page, setPage] = useContext(PageContext);

  const linkHandler = (pressedLink) => {
    setPage(pressedLink);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <span className={classes.logo}>minda.dev</span>
      </div>
      <div className={classes.navbar__links}>
        <span
          className={`${classes.link} ${
            page == "About" ? classes.active : null
          }`}
          onClick={() => linkHandler("About")}
        >
          About
        </span>
        <span
          className={`${classes.link} ${
            page == "Projects" ? classes.active : null
          }`}
          onClick={() => linkHandler("Projects")}
        >
          Projects
        </span>
        <span
          className={`${classes.link} ${
            page == "Contact" ? classes.active : null
          }`}
          onClick={() => linkHandler("Contact")}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Navbar;
