import React from 'react'
import { Link } from 'react-router-dom'

// Components
import MouseCoordinates from 'components/observables/MouseCoordinates'
import MouseDispatcher from 'components/observables/MouseDispatcher'
import MouseLocation from 'components/observables/MouseLocation'

const RxObservablesView = () => (
	<div>
		<MouseLocation />

		<div style={{ position: 'relative', zIndex: 1 }}>
			<Link to="/" title="Go Back">{'<'} Go Back</Link>
		</div>

		<MouseCoordinates />
		<MouseDispatcher />
	</div>
)

export default RxObservablesView
