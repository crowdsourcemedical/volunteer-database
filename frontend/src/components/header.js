import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{

	render(){
		return (
			<ul>
				<li><a href="/">Home</a></li>
				<li><Link to="/signup">Sign up</Link></li>
				<li><Link to="/login">Sign in</Link></li>
			</ul>
		)
	}
}
