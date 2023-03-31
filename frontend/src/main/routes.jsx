import React from "react";
import { Redirect, Route, Router, hashHistory } from "react-router";
import Todo from "../todo/todo";
import About from "../about/about";

export default (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos/" />
    </Router>
  );
};
