import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./fonts/berkah_ramadhan/Berkah_Ramadhan.ttf";
// import "./fonts/dolce_vita/Dolce Vita.ttf";
// import "./fonts/dolce_vita/Dolce Vita Light.ttf";
// import "./fonts/dolce_vita/Dolce Vita Heavy Bold.ttf";
import "./fonts/louis_george_caf/Louis_George_Cafe.ttf";
import "./fonts/louis_george_caf/Louis_George_Cafe_Light.ttf";
import "./fonts/louis_george_caf/Louis_George_Cafe_Bold.ttf";
import "./fonts/dolce_vita/Dolce_Vita.ttf";
import "./fonts/dolce_vita/Dolce_Vita_Light.ttf";
import "./fonts/dolce_vita/Dolce_Vita_Heavy_Bold.ttf";

import { GlobalProvider } from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
