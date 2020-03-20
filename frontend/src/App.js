import React from 'react';
import logo from './logo.svg';
import Header from './components/header.js'
import HomePage from './pages/home.js'
import './App.css';

function App() {
  return (
    <div className="App">
	<Header />
	<HomePage />
    </div>
  );
}

export default App;
