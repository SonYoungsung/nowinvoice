import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import moment from "moment";

import createStore from "./store";
import App from "./App";

import "moment/locale/ko";

moment.locale("ko");

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
