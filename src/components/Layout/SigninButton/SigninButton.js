import React from "react";
import { useHistory } from "react-router-dom";
import "./SigninButton.css";

const SigninButton = () => {
  let history = useHistory();
  function openSignIn() {
    history.push("/signin");
  }
  return (
    <div className="signin-btn__container">
      <button className="btn btn-danger" onClick={openSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SigninButton;
