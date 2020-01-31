import React from 'react';
import Container from "./components/Container";
import Home from "./components/Home";
import { Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">
  <Route exact path="/home">
    <Home />
  </Route>
  <Route path="/characters">
    <Container />
  </Route> 

  <NavLink to="/home">Home Page</NavLink>
  <NavLink to="/characters">Characters</NavLink>
    </div>
  );
}

export default App;
