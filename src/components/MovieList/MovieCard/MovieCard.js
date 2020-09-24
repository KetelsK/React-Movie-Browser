import React from "react";
import "./MovieCard.css";
import { useHistory } from "react-router-dom";

function MovieCard(props) {
  let history = useHistory();
  function showDetails(event) {
    history.push(`/moviedetails/${event.currentTarget.id}`);
  }
  const genres = props.genres.map((genre, i) => {
    if (i === props.genres.length - 1) return <label key={i}>{genre}</label>;
    else return <label key={i}>{genre},&nbsp; </label>;
  });

  const id = props.id;
  return (
    <div id={id} className="moviecard__container" onClick={showDetails}>
      <img src={`https://image.tmdb.org/t/p/w200/${props.imgSrc}`} alt="" />
      <div className="moviecard__container__info">
        <h3>{props.title}</h3>
        <label className="moviecard__note">{props.note}</label>
        {genres}
      </div>
    </div>
  );
}

export default MovieCard;
