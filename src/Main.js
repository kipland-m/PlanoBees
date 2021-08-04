import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
 
class Main extends Component {
  render() {
    return (
      <div className="page-container">
      <div className="content-wrap">
        <HashRouter>

          <center>
          <h1>Plano Bees</h1>
          </center>

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</ NavLink></li>
          </ul>

          <div className="content">
            <Route exact path="/"component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
          </div>

        </HashRouter>
      </div>
      <Footer />
      </div>
    );
  } 
}

export default Main;
