import React from "react";
import "./SignIn.css";
import "../Layout/SigninButton/SigninButton.css";
const SignIn = () => {
  function handleSubmit() {
    console.log("ok");
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="signin__container mt-5">
        <p>
          <h1 className="signin-h1">Sign In</h1>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" class="form-control"></input>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input name="password" type="password" class="form-control"></input>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-danger w-100 mt-2">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
