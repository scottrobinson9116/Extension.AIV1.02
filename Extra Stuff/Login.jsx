import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import dynamodb from "../../aws-config.jsx";
import AWS from "aws-sdk";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="loginContainer">
        <div className="login">
          <h1>Sign In</h1>
          <input placeholder="     Username"></input>
          <input
            placeholder="     Password"
            type="password"
            name="password"
          ></input>
          <Link to="/Welcome">
            <button>Sign In</button>
          </Link>
          <p style={{ color: "white" }}>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
