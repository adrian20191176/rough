import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/Blog";
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/Footer/RFooter";
import AppDeveloper from "./components/AppDeveloper/AppDeveloper";
import AboutUs from "./components/AboutUs";
import Results from "./components/Results/Results";

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={AppDeveloper} />
            <Route path="/app-developer" component={AppDeveloper} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/results" component={Results} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
