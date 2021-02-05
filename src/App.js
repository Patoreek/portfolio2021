import React, { useContext } from "react";

import logo from "./logo.svg";
import classes from "./App.module.scss";

import Navbar from "./containers/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import AboutPage from "./containers/AboutPage/AboutPage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
import ContactPage from "./containers/ContactPage/ContactPage";

import { PageContext } from "./context/GlobalContext";

function App() {
  const [page, setPage] = useContext(PageContext);
  return (
    <div className={classes.app}>
      <Navbar />
      <Footer />
      {page == "About" ? <AboutPage /> : null}
      {page == "Projects" ? <ProjectsPage /> : null}
      {page == "Contact" ? <ContactPage /> : null}
    </div>
  );
}

export default App;
