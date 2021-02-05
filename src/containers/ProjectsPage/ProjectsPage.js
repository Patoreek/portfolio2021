import React from "react";
import classes from "./ProjectsPage.module.scss";

import Project from "../../components/Project/Project";

import locusImg from "../../assets/project_images/locus/locus_home.png";
import momentoImg from "../../assets/project_images/momento/momento_game.png";
import luxspacesImg from "../../assets/project_images/luxspaces/luxspaces_home.png";
import brighteImg from "../../assets/project_images/brighte/brighte_ad.png";

const ProjectsPage = () => {
  return (
    <div className={classes.projectsPage}>
      <div className={classes.projectsPage__greyBg}></div>
      <div className={classes.content}>
        <h1 className={classes.content__my}>My</h1>
        <h1 className={classes.content__projects}>Projects.</h1>
        <p className={classes.content__subtitle}>
          This is a collection of my favourite projects so far -
        </p>
        <p className={classes.content__findOutMore}>
          Find more at my{" "}
          <a
            href="https://github.com/Patoreek"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.content__github}
          >
            github
          </a>
        </p>
        <div className={classes.projects}>
          <a
            className={classes.projects__locus}
            href="https://www.locusdive.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              title="Locus"
              subtitle="Dive Site Location Service"
              image={locusImg}
              year="2021"
            />
          </a>
          <a
            className={classes.projects__momento}
            href="https://momentogame.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              title="Momento"
              subtitle="Memory Card Game"
              image={momentoImg}
              year="2020"
            />
          </a>
          <a
            className={classes.projects__luxspaces}
            href="https://www.theluxspaces.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              title="LuxSpaces"
              subtitle="Luxury Vacation Rentals"
              image={luxspacesImg}
              year="2020"
            />
          </a>
          <a
            className={classes.projects__brighte}
            href="https://brighte.com.au/tradies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              title="Brighte"
              subtitle="Radio Ad Landing Page"
              image={brighteImg}
              year="2020"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
