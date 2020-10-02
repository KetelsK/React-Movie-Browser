import React from "react";
import "./Watchlist.css";
import firebase from "../Authentication/Firebase/Firebase";
import MovieCard from "../MovieList/MovieCard/MovieCard";

class Watchlist extends React.Component {
  state = {
    movieList: [],
    isLoadingMovie: true,
    isLoadingGenre: true,
    genres: []
  };

  componentDidMount() {
    this.fetchMoviesfromFirebase();
  }

  fetchMoviesfromFirebase = () => {
    //fetch movie genres
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoadingGenre: false, genres: data.genres });
      });

    const movies = firebase.getMovieList();
    this.setState({ movieList: movies, isLoadingMovie: false });
  };

  render() {
    let genresList = [];
    const movieList = this.state.movieList;
    const isLoadingGenre = this.state.isLoadingGenre;
    const genres = this.state.genres;
    const movies = this.state.isLoadingMovie
      ? ""
      : movieList.map((movie, i) => {
          genresList = [];
          const g = isLoadingGenre
            ? ""
            : movie.genres.map(id => {
                genres.map(genre => {
                  if (id.id === genre.id) {
                    genresList.push(genre.name);
                  }
                });
              });

          return (
            <MovieCard
              key={i}
              id={movie.id}
              title={movie.title}
              note={movie.note}
              genres={genresList}
              imgSrc={movie.imgSrc}
            />
          );
        });
    console.log(movies);
    return (
      <div>
        <h1 className="watchlist-title">My Watchlist</h1>
        <div className="movies__container justify-content-md-between justify-content-center">
          {movies}
        </div>
      </div>
    );
  }
}

export default Watchlist;
