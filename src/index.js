import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "./Styles/index.scss";
import "./Styles/fonts.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";

function initApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

WebFont.load({
  custom: {
    families: ["Sohne Mono Buch"],
  },
  active: () => {
    initApp();
  },
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
