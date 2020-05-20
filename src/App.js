import React from "react";
import "./App.css";

import { HashRouter, Switch, Route } from "react-router-dom";

import AppBar from "./AppBar";
import Home from "./Home";
import Report from "./Report";
import Decree from "./Decree";
import About from "./About";

function App() {
  return (
    <HashRouter basename="/">
      <div className="h-screen">
        <AppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/boletins">
            <Report />
          </Route>
          <Route path="/decretos">
            <Decree />
          </Route>
          <Route path="/sobre">
            <About />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
