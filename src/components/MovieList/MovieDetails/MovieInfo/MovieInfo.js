import React from "react";
import "./MovieInfo.css";
import firebase from "../../../Authentication/Firebase/Firebase";

function MovieInfo(props) {
  function addToWatchList(event) {
    if (firebase.auth.currentUser) {
      const movie = {
        id: event.target.id,
        title: props.title,
        note: props.vote_average,
        genres: props.genres,
        imgSrc: props.poster_path,
        userId: firebase.auth.currentUser.uid
      };
      firebase.addToWatchList(movie);
    } else {
      alert("You must be loggin in to add a movie to your Watchlist !");
    }
  }

  return (
    <div>
      <div className="d-flex flex-row movie-details__topcontainer">
        <div className="movie-details-img">
          <img
            src={`https://image.tmdb.org/t/p/w300${props.poster_path}`}
            alt=""
          />
        </div>

        <div className="d-flex flex-column title-overview-container">
          <h1>{props.title}</h1>
          <button
            id={props.id}
            onClick={addToWatchList}
            className="btn btn-danger add-watchList-btn"
          >
            Add to my Watchlist
          </button>
          <label className="moviecard__note mt-2">{props.vote_average}</label>
          <p className="movie-details__overview">{props.overview}</p>
          <p className="movie-details-genre__p">
            Genres:{" "}
            {props.genres.map(genre => (
              <label key={genre.name} className="movie-details-genre">
                {genre.name}
              </label>
            ))}
          </p>
        </div>
      </div>
      <div className="movie-details__topcontainer__bottomdetails">
        <span>Release date: {props.release_date}</span>
        <span>Duration: {props.runtime + "m"}</span>
        <span>Budget: {props.budget + "$"}</span>
      </div>
    </div>
  );
}

export default MovieInfo;
