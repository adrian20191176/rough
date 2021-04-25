import React, { Component } from "react";
import "./App.css";
import Confirmation from "./components/Confirmation";
import Home from "./components/Home";
import Results from "./components/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Blog from "./components/Blog";
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Banner1 from "./components/HomeImages/imag1.jpg";
class App extends Component {
  render() {
    return (
      <Router>
        {/* <NavBar /> */}
        <div className="App">
          <Container />
          <Switch>
            <Route path="/about-us" component={AboutUs} />
            <Route path="/Blog" component={Blog} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
