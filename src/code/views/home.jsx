import React from 'react'
import { Link } from 'react-router'

const HomeView = () => (
	<div>
		<h1>Ghadyani Framework Playground</h1>
		<ul>
			<li><Link to="/calendar" title="Calendar">Calendar</Link></li>
		</ul>
	</div>
)

export default HomeView
