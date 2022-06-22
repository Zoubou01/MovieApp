import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsPage from "./Pagess/DetailsPage";
import Home from "./Pagess/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:imdbID">
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
