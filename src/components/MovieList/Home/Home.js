import React from "react";
import "./Home.css";
import MovieCard from "../MovieCard/MovieCard";
import ButtonMovieFilter from "../ButtonMovieFilter/ButtonMovieFilter";

export class Home extends React.Component {
  static displayName = Home.name;
  state = {
    filter: "",
    apiKey: "44410dd0833b353ce85b8a594a2ec589",
    movieList: {},
    genres: {},
    isLoadingMovie: true,
    isLoadingGenre: true
  };

  fetchMovies = filter => {
    fetch(
      "https://api.themoviedb.org/3/movie/337401/images?api_key=44410dd0833b353ce85b8a594a2ec589&language=en-US"
    )
      .then(response => response.json())
      .then(data => console.log(data));
    const apiKey = this.state.apiKey;
    //exemple:https://api.themoviedb.org/3/movie/popular?api_key=44410dd0833b353ce85b8a594a2ec589&language=en-US&page=1
    fetch("https://api.themoviedb.org/3/movie/" + filter + "?api_key=" + apiKey)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movieList: data,
          isLoadingMovie: false
        });
      });

    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        apiKey +
        "&language=en-US"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          genres: data,
          isLoadingGenre: false
        });
      });
  };

  callbackFilter = filter => {
    this.setState({ filter: filter }, () =>
      this.fetchMovies(this.state.filter)
    );
  };

  componentDidMount() {
    this.fetchMovies("popular");
  }

  render() {
    document.body.style.background = " background-color: #000000";
    document.body.style.backgroundImage =
      "linear-gradient(315deg, #000 0%, #2f2b2b 74%)";

    let genres = [];
    const filter = this.state.filter;
    console.log(filter);
    const movies = this.state.isLoadingMovie
      ? ""
      : this.state.movieList.results.map(movie => {
          genres = [];
          const getGenres = this.state.isLoadingGenre
            ? ""
            : movie.genre_ids.map(id => {
                this.state.genres.genres.map(genre => {
                  if (id === genre.id) {
                    genres.push(genre.name);
                  }
                });
              });
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              note={movie.vote_average}
              genres={genres}
              imgSrc={movie.poster_path}
            />
          );
        });

    return (
      <div>
        <ButtonMovieFilter
          selectedOption={filter}
          data={{
            callbackFilter: this.callbackFilter
          }}
        />
        <div className="movies__container">{movies}</div>
      </div>
    );
  }
}
