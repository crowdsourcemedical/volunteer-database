import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
import Header from './components/header.js';
import HomePage from './pages/home.js';
import SearchPage from './pages/search.js';
import AboutPage from './pages/about.js';
import LoginPage from './pages/login.js';
import SignupPage from './pages/signup.js';
import StoryBook from './pages/storybook.js';
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
					<Route path="/login" exact component={LoginPage} />
					<Route path="/signup" exact component={SignupPage} />
					<Route path="/storybook" exact component={StoryBook} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
