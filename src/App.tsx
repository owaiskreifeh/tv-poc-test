import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css'
import { MainSwitcher } from "./Components/MainSwitcher";
import { Navigation } from "./Components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <MainSwitcher />
    </Router>
  );
}

export default App;
