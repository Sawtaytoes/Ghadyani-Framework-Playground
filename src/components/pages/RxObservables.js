import React from 'react'
import { Link } from 'react-router-dom'

// Components
import MouseCoordinates from 'components/observables/MouseCoordinates'
import MouseLocation from 'components/observables/MouseLocation'

const RxObservablesView = () => (
	<div>
		<Link to="/" title="Go Back">{'<'} Go Back</Link>
		<MouseCoordinates />
		<MouseLocation />
	</div>
)

export default RxObservablesView
