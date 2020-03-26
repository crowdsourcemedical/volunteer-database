import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home';
import HomePage2 from './pages/home2'
import SearchPage from './pages/search';
import AboutPage from './pages/about';
import SignupPage from './pages/signup_volunteer';
import SignupVolunteerPage from './pages/signup_volunteer_mb';
import AccountCreationPage from './pages/account_creation';
import Style from './pages/style';
import ProjectSubmit from './pages/ProjectSubmit';
import Project from './pages/project';
import Profile from './components/Profile/Profile.component';
import Footer from './components/footer';
import AccountSettings from './components/AccountSettings/Account-settings.component';
import './App.css';

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home2" exact component={HomePage2} />
          <Route path="/profile/new" exact component={AccountCreationPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/signup/volunteer" exact component={SignupVolunteerPage} />
          <Route path="/projects/submit" exact component={ProjectSubmit} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/style" exact component={Style} />
          <Route path="/project" exact component={Project} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
