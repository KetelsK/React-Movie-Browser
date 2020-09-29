import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Home } from "./components/MovieList/Home/Home";
import MovieDetails from "./components/MovieList/MovieDetails/MovieDetails";
import SignIn from "./components/SignIn/SignIn";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:movieToSearch" component={Home} />
          <Route path="/moviedetails/:id" component={MovieDetails} />
          <Route path="/signin" component={SignIn} />
        </Layout>
      </BrowserRouter>
    );
  }
}
