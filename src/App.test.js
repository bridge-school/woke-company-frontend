import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

global.fetch = jest.fn(() =>
  Promise.resolve(
    new window.Response('{ "val": "this is a mock response" }', {
      status: 200,
      headers: {
        "Content-type": "application/json"
      }
    })
  )
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
