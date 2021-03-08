import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skripsi from "./home/Skripsi";
import Splash from "./home/splash";


export default class App extends Component {
  render() {
    if (localStorage.getItem("token") != null) {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Switch>
              <Route path="/logout">
                <Skripsi />
              </Route>
              <Route path="/">
                <Splash />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Switch>
              <Route path="/skripsi">
                <Skripsi />
              </Route>
              <Route path="/">
                <Splash />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }
}