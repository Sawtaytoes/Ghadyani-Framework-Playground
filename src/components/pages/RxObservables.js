import React from 'react'
import { Link } from 'react-router-dom'

// Components
import MouseCoordinates from 'components/observables/MouseCoordinates'

const RxObservablesView = () => (
	<div>
		<Link to="/" title="Go Back">{'<'} Go Back</Link>
		<MouseCoordinates />
	</div>
)

export default RxObservablesView
