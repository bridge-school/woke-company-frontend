import React from "react";
import ReactDOM from "react-dom";
// REACT REDUX PROVIDER
import { Provider } from "react-redux";
// CSS
import "./css/tailwind.css";
// REDUX STORE
import store from "./store";
// COMPONENTS
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// setting our root element as a const variable
const rootElement = document.getElementById("root");

// passing our store to the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

registerServiceWorker();
