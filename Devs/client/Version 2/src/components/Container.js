import React from "react";
import "../App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmation from "./Confirmation";
import Results from "./Results";

function Container() {
  return (
    <div className="container">
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/Container/Home" component={Home} />
          <Route path="/Container/Confirmation" component={Confirmation} />
          <Route path="/Container/Results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default Container;
