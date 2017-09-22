import React from 'react'
import { Link } from 'react-router-dom'

// Components
import MouseCoordinates from 'components/observables/MouseCoordinates'
import MouseDispatcher from 'components/observables/MouseDispatcher'
import MouseLocation from 'components/observables/MouseLocation'

const RxObservablesView = () => (
	<div>
		<div>
			<Link to="/" title="Go Back">{'<'} Go Back</Link>
		</div>

		<MouseCoordinates />
		<MouseDispatcher />
		<MouseLocation />
	</div>
)

export default RxObservablesView
