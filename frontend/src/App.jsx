import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import AboutPage from './pages/about';
import SignupPage from './pages/signup';
import SignupVolunteerPage from './pages/signup_volunteer';
import Style from './pages/style';
import ProjectSubmit from './pages/ProjectSubmit';
import Project from './pages/project';
import Profile from './components/Profile/Profile.component';
import Footer from './components/footer';
import './App.css';
import './about.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/search" exact component={SearchPage} />
              <Route path="/signup" exact component={SignupPage} />
              <Route path="/signup/volunteer" exact component={SignupVolunteerPage} />
              <Route path="/projects/submit" exact component={ProjectSubmit} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/style" exact component={Style} />
              <Route path="/project" exact component={Project} />
            </Switch>
          </div>

          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
