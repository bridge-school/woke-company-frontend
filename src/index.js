import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./css/tailwind.css";
import store from "./store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

registerServiceWorker();
