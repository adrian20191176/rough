import React, { Component } from "react";
import "./App.css";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";
import Results from "./components/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Banner1 from "./components/HomeImages/imag1.jpg"
class App extends Component {
  render() {
    return (
      <Router>
        {/* <NavBar /> */}
        <div className="App">
          <Switch>
            <Route path="/Container" component={Container} />
            <Route path="/Blog" component={Blog} />
          </Switch>
        </div>
        <div className="container">
          
        <img src={Banner1} className="banner" alt="blogimg" width="1430px" height="350px" />
        <fieldset className="fieldset">
          <legend>What we do...</legend>
        </fieldset>
        <button  class="Begin">Begin</button>
          </div>
      </Router>
    );
  }
}

export default App;
