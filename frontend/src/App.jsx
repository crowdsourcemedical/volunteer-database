import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import SignupPage from './pages/signup_volunteer';
import SignupVolunteerPage from './pages/signup_volunteer_mb';
import AccountCreationPage from './pages/account_creation';
import Style from './pages/style';
import ProjectSubmit from './pages/ProjectSubmit';
import Project from './pages/project';
import ChatRoute from './pages/chats/ChatRoute';
import Profile from './components/Profile/Profile.component';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile/new" exact component={AccountCreationPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/signup/volunteer" exact component={SignupVolunteerPage} />
          <Route path="/projects/submit" exact component={ProjectSubmit} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/style" exact component={Style} />
          <Route path="/project" exact component={Project} />
          <Route path="/chats" component={ChatRoute} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
