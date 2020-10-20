import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Dashboard from "./container/Dashboard";
import Organization from "./components/Organization/Organization";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="Assignment" />
        <main className="app__main">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/organization/:id" component={Organization} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
