import React from "react";
import "./NavBar.css";
import { Container } from "reactstrap";
import VideocamIcon from "@material-ui/icons/Videocam";
import { useHistory } from "react-router-dom";
import SearchMovie from "./SearchMovie/SearchMovie";
import SigninButton from "./SigninButton/SigninButton";

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
            <VideocamIcon className="header__icon" />
            <h1>React Movie</h1>
          </div>
          <SearchMovie className="ml-3 mb-sm-0" />
          <SigninButton />
        </div>
      </Container>
    </div>
  );
}

export default Header;
