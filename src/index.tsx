import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateContext } from "./context/stateContext";
import { ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <StateContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </StateContext>,
  document.getElementById("root")
);
