import React, { Component } from "react";
import {
  Route,
  withRouter,
  Redirect,
  Switch,
  BrowserRouter
} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import Users from "./components/Users/Users";

class App extends Component {
  render() {
    let routes = (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={Users} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default withRouter(App);
