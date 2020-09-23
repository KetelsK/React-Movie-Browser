import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/MovieList/Home/Home";
import MovieDetails from "./components/MovieList/MovieDetails/MovieDetails";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/moviedetails/:id" component={MovieDetails} />
        </Layout>
      </BrowserRouter>
    );
  }
}
