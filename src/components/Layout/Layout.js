import React, { Component, useContext } from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      <Container>{props.children}</Container>
    </div>
  );
}
