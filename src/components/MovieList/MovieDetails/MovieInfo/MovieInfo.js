import React from "react";
import "./MovieInfo.css";

function MovieInfo(props) {
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
