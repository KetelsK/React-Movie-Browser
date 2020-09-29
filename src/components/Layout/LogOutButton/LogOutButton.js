import React from "react";
import { useHistory } from "react-router-dom";
import Firebase from "../../Authentication/Firebase/Firebase";
import "./LogOutButton.css";

const SigninButton = () => {
  let history = useHistory();

  async function handleLogOut() {
    try {
      await Firebase.logout();
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="signin-btn__container">
      <button className="btn btn-danger" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default SigninButton;
