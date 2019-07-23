import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Login;
