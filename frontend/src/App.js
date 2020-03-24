import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar.js';
import HomePage from './pages/home.js';
import SearchPage from './pages/search.js';
import AboutPage from './pages/about.js';
import SignupPage from './pages/signup.js';
import SignupVolunteerPage from './pages/signup_volunteer';
import StoryBook from './pages/storybook.js';
import ProjectSubmit from './pages/ProjectSubmit.js';
import Style from './pages/style.js';
import Project from './pages/project';
import UserProfile from './components/UserProfile/Profile.component';
import Profile from './components/Profile/Profile.component';
import './App.css';
import './about.css';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/about" exact component={AboutPage} />
					<Route path="/search" exact component={SearchPage} />
					<Route path="/signup" exact component={SignupPage} />
					<Route path="/signup/volunteer" exact component={SignupVolunteerPage} />
					<Route path="/storybook" exact component={StoryBook} />
					<Route path="/projects/submit" exact component={ProjectSubmit} />
					<Route path="/style" exact component={Style} />
 					<Route path='/userprofile' exact component={UserProfile} />
				</Switch>
			</div>
		</Router>
	);
  }
export default App;
