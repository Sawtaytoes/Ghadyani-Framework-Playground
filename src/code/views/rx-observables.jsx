import React from 'react'
import { Link } from 'react-router'

// Components
import MouseCoordinates from 'components/mouse-coordinates'

const RxObservablesView = () => (
	<div>
		<Link to="/" title="Go Back">{'<'} Go Back</Link>
		<MouseCoordinates />
	</div>
)

export default RxObservablesView
