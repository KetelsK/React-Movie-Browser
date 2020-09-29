import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Home } from "./components/MovieList/Home/Home";
import MovieDetails from "./components/MovieList/MovieDetails/MovieDetails";
import Register from "./components/Authentication/Register/Register";
import LogIn from "./components/Authentication/LogIn/LogIn";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:movieToSearch" component={Home} />
        <Route path="/moviedetails/:id" component={MovieDetails} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
      </Layout>
    </BrowserRouter>
  );
}
