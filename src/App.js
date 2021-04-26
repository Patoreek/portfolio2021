import React, { useContext } from "react";

import logo from "./logo.svg";
import classes from "./App.module.scss";

import Navbar from "./containers/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import AboutPage from "./containers/AboutPage/AboutPage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
import ContactPage from "./containers/ContactPage/ContactPage";

import { PageContext } from "./context/GlobalContext";

import { motion } from "framer-motion";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.5,
    },
  },
};

function App() {
  const [page, setPage] = useContext(PageContext);
  return (
    <div className={classes.app}>
      <Navbar />
      <Footer />
      {page == "About" ? (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <AboutPage />
        </motion.div>
      ) : null}
      {page == "Projects" ? (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <ProjectsPage />
        </motion.div>
      ) : null}
      {page == "Contact" ? (
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <ContactPage />
        </motion.div>
      ) : null}
    </div>
  );
}

export default App;
