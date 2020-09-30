import React from "react";
import "./BackgroundImage.css";
export default function BackgroundImage(props) {
  return (
    <div
      className="background"
      style={{
        backgroundImage:
          'url("http://image.tmdb.org/t/p/original' + props.src + '")'
      }}
    ></div>
  );
}
