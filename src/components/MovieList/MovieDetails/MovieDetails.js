import React from "react";
import MovieCredits from "./MovieCredits/MovieCredits";
import "./MovieDetails.css";
import MovieInfo from "./MovieInfo/MovieInfo";

class MovieDetails extends React.Component {
  state = {
    apiKey: "44410dd0833b353ce85b8a594a2ec589",
    id: this.props.match.params.id,
    title: "",
    overview: "",
    poster_path: "",
    backdrop_path: "",
    genres: [],
    status: "",
    release_date: "",
    budget: 0,
    revenue: 0,
    vote_average: 0,
    runtime: 0,
    cast: [],
    isCastReady: false
  };

  fetchMovieDetails = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.state.id +
        "?api_key=" +
        this.state.apiKey
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          overview: data.overview,
          poster_path: data.poster_path,
          backdrop_path: data.backdrop_path,
          genres: data.genres,
          status: data.status,
          release_date: data.release_date,
          budget: data.budget,
          revenue: data.revenue,
          vote_average: data.vote_average,
          runtime: data.runtime
        });
      });
  };

  fetchMovieCredits = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.state.id +
        "/credits?api_key=" +
        this.state.apiKey
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ cast: data.cast, isCastReady: true });
        console.log(data.cast);
      });
  };

  componentDidMount() {
    this.fetchMovieDetails();
    this.fetchMovieCredits();
  }

  render() {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundImage =
      "url(https://image.tmdb.org/t/p/original/" +
      this.state.backdrop_path +
      ")";
    //console.log(this.state.cast.map(cast => cast.name));
    const movieCredits = this.state.cast.map(cast => {
      return (
        <MovieCredits
          key={cast.id}
          name={cast.name}
          character={cast.character}
          profile_path={cast.profile_path}
        />
      );
    });
    return (
      <div className="movie-details__container">
        <MovieInfo
          title={this.state.title}
          overview={this.state.overview}
          poster_path={this.state.poster_path}
          genres={this.state.genres}
          release_date={this.state.release_date}
          runtime={this.state.runtime}
          budget={this.state.budget}
        />
        <div className="movie-credits__container">
          <p className="movie-credits__actors">Actors</p>
          <div className="movie-credits__actors__container">{movieCredits}</div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
