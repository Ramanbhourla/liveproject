import React from "react";
import reactDOM from "react-dom";
import App from "./app";
import "./Files/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
//bootsrap installed with  css we can just import it and use its compontents from its offical site...
//bootsrap is all about classes...
//
// import { createStore } from "redux";
// import RootReducer from "./ServiceR/Reducers/RootReduser";
// import { Provider } from "react-redux";

// const Store = createStore(RootReducer);
//   console.log(Store)
reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
