import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import SessionLayout from "./sessionLayout";
import Home from "./home";
import Login from "./login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <SessionLayout path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
