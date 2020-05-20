import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "./AppBar";
import Home from "./Home";
import Report from "./Report";
import Decree from "./Decree";
import About from "./About";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
