import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./Files/NavBar";
import Home from "./Files/Home";
import Services from "./Files/Services";
import About from "./Files/About";
import Contact from "./Files/Contact";
import Sports from "./Files/Sports";

const App = () => {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/services"} render={() => <Services />} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route path={"/services/:sports"} component={Sports} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
