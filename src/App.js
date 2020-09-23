import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/MovieList/Home/Home";
import MovieDetails from "./components/MovieList/MovieDetails/MovieDetails";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Home} />
          <Route path="/now_playing" component={Home} />
          <Route path="/top_rated" component={Home} />
          <Route path="/upcoming" component={Home} />
          <Route exact path="/moviedetails/:id" component={MovieDetails} />
        </Layout>
      </BrowserRouter>
    );
  }
}
