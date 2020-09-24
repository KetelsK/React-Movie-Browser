import React from "react";
import "./Home.css";
import MovieCard from "../MovieCard/MovieCard";
import ButtonMovieFilter from "../ButtonMovieFilter/ButtonMovieFilter";
import Pagination from "react-bootstrap-4-pagination";
import BackgroundImage from "../../Layout/BackgroundImage";

export class Home extends React.Component {
  static displayName = Home.name;
  state = {
    filter: "popular",
    apiKey: "44410dd0833b353ce85b8a594a2ec589",
    movieList: {},
    genres: {},
    isLoadingMovie: true,
    isLoadingGenre: true,
    page: 1,
    totalPages: "",
    backgroundImage: "",
    movieToSearch: this.props.match.params.movieToSearch
  };

  fetchMovies = (filter, page) => {
    const apiKey = this.state.apiKey;
    this.state.isLoadingMovie = true;
    this.state.isLoadingGenre = true;
    //fetch movie genres
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
    //fetch all movies
    if (this.state.movieToSearch === undefined) {
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          filter +
          "?api_key=" +
          apiKey +
          "&page=" +
          (page ? page : "1")
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            movieList: data,
            totalPages: data.total_pages,
            isLoadingMovie: false,
            backgroundImage: data.results[0].backdrop_path
          });
        });
    }
    //fetch movies by name
    else {
      fetch(
        "https://api.themoviedb.org/3/search/movie?api_key=" +
          apiKey +
          "&language=en-US&query=" +
          this.state.movieToSearch +
          "&page=" +
          (page ? page : "1") +
          "&include_adult=false"
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            movieList: data,
            totalPages: data.total_pages,
            isLoadingMovie: false,
            backgroundImage: ""
          });
        });
    }
  };

  callbackFilter = filter => {
    if (filter === "now_playing") document.title = "Now Playing Movies";
    else if (filter === "top_rated") document.title = "Top Rated Movies";
    else if (filter === "popular") document.title = "Popular Movies";
    else document.title = "Upcoming Movies";
    this.setState({ filter: filter, page: 1 }, () =>
      this.fetchMovies(this.state.filter, 1)
    );
  };

  componentDidMount() {
    this.fetchMovies("popular", 1);
    document.title = "Popular Movies";
  }

  setPage = event => {
    this.setState({ page: event });
    this.fetchMovies(this.state.filter ? this.state.filter : "popular", event);
  };

  componentWillReceiveProps(props) {
    this.setState({ movieToSearch: props.match.params.movieToSearch });
    this.fetchMovies(this.state.filter, this.state.page);
  }

  render() {
    document.body.style.background = " background-color: #000000";
    document.body.style.backgroundImage =
      "linear-gradient(315deg, #000 0%, #2f2b2b 74%)";
    let genres = [];
    const filter = this.state.filter;
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
        <BackgroundImage src={this.state.backgroundImage} />
        <ButtonMovieFilter
          selectedOption={filter}
          data={{
            callbackFilter: this.callbackFilter
          }}
        />
        <div className="movies__container justify-content-md-between justify-content-center">
          {movies}
        </div>
        <Pagination
          totalPages={parseInt(this.state.totalPages, 10)}
          currentPage={this.state.page}
          onClick={this.setPage}
          prevNext
          size="lg"
        />
      </div>
    );
  }
}
