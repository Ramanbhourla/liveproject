import React from "react";
import reactDOM from "react-dom";
import App from "./app";
import "./Files/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
