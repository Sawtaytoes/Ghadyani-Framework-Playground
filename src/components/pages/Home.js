import React from 'react'
import { Link } from 'react-router-dom'
import { pure } from 'recompose'

export const HomeView = () => (
	<div>
		<h1>Ghadyani Framework Playground</h1>
		<ul>
			<li><Link to="/calendar" title="Calendar">Calendar</Link></li>
			<li><Link to="/rx-observables" title="Rx Observables">Rx Observables</Link></li>
		</ul>
	</div>
)

export default pure(HomeView)
