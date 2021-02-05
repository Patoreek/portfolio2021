import React, { useState, createContext } from "react";

export const PageContext = createContext();
export const SlideContext = createContext();

export const GlobalProvider = (props) => {
  const [page, setPage] = useState("About"); //! CHANGE TO "About"

  const [slide, setSlide] = useState("AboutMe");

  return (
    <PageContext.Provider value={[page, setPage]}>
      <SlideContext.Provider value={[slide, setSlide]}>
        {props.children}
      </SlideContext.Provider>
    </PageContext.Provider>
  );
};
