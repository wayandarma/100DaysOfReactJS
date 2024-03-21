import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Day 10-20 Learn Advance React, Redux and Redux-Saga
import { Provider } from "react-redux";
import { store } from "./Days/Day_10--Learn-Redux/redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
