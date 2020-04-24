import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from  "./style.js";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
