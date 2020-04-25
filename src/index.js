import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./style.js";
import { IconFontStyle } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle />
      <IconFontStyle />
      <App />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
