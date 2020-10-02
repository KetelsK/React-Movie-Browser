﻿import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Container } from "reactstrap";
import VideocamIcon from "@material-ui/icons/Videocam";
import { useHistory } from "react-router-dom";
import SearchMovie from "./SearchMovie/SearchMovie";
import LogInButton from "./LogInButton/LogInButton";
import LogOutButton from "./LogOutButton/LogOutButton";
import Firebase from "../Authentication/Firebase/Firebase";

function Header() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  let history = useHistory();

  useEffect(() => {
    Firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
      setIsUserLoggedIn(Firebase.auth.currentUser);
    });
  });

  function goHome() {
    history.push("/");
  }

  function goToWatchList() {
    history.push("/watchlist");
  }

  return (
    <div className="header">
      <Container className="header__container">
        <div className="icon-title__container">
          <div className="d-flex align-items-center" onClick={goHome}>
            <VideocamIcon className="header__icon" />
            <h1>React Movie</h1>
          </div>
          <SearchMovie className="ml-3 mb-sm-0" />
          {isUserLoggedIn ? (
            <button
              className="btn btn-danger ml-2 btn-my-watchlist"
              onClick={goToWatchList}
            >
              My Watchlist
            </button>
          ) : (
            ""
          )}

          {firebaseInitialized ? <LogOutButton /> : <LogInButton />}
        </div>
      </Container>
    </div>
  );
}

export default Header;
