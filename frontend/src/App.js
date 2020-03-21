import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//import logo from './logo.svg';
import Header from './components/header.js'
import HomePage from './pages/home.js'
import SearchPage from './pages/search.js'
import AboutPage from './pages/about.js'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
            <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/search" exact component={SearchPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
