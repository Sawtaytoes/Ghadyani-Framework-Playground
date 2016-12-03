import React, { PureComponent } from 'react'
import { Link } from 'react-router'

// Utilities
import StylesLoader from 'utilities/styles-loader'

// Styles
const stylesLoader = StylesLoader.create()

class Home extends PureComponent {
	render() { return (
		<div>
			<h1>Ghadyani Framework Playground</h1>
			<ul>
				<li><Link to="/calendar" title="Calendar">Calendar</Link></li>
			</ul>
		</div>
	)}
}

export default stylesLoader.render(Home)
