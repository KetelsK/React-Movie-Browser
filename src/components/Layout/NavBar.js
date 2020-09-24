﻿import React from "react";
import "./NavBar.css";
import { Container } from "reactstrap";
import VideocamIcon from "@material-ui/icons/Videocam";
import { useHistory } from "react-router-dom";
import SearchMovie from "./SearchMovie/SearchMovie";

function Header() {
  let history = useHistory();

  function goHome() {
    history.push("/");
  }

  const styles = {
    largeIcon: {
      width: 60,
      height: 60,
      color: "#ffa801"
    }
  };
  return (
    <div className="header">
      <Container className="header__container">
        <div className="icon-title__container">
          <div className="d-flex align-items-center" onClick={goHome}>
            <VideocamIcon style={styles.largeIcon} />
            <h1>React Movie</h1>
          </div>
          <SearchMovie />
        </div>
      </Container>
    </div>
  );
}

export default Header;
