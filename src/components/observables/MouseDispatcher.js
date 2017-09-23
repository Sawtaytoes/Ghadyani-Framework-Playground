import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import LifeCycles from 'components/life-cycles/LifeCycles'

import {
	endMouseCapture,
	startMouseCapture,
} from 'reducers/mouseBehaviors'

const componentDidUpdate = (
	(endMouseCapture, startMouseCapture) => () => {
		endMouseCapture()
		startMouseCapture()
	}
)

const MouseDispatcher = ({
	endMouseCapture,
	startMouseCapture
}) => (
	<LifeCycles
		componentDidUpdate={componentDidUpdate(endMouseCapture, startMouseCapture)}
		componentWillMount={startMouseCapture}
		componentWillUnmount={endMouseCapture}
	/>
)

MouseDispatcher.propTypes = {
	endMouseCapture: PropTypes.func.isRequired,
	startMouseCapture: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
	endMouseCapture,
	startMouseCapture,
}

export default connect(null, mapDispatchToProps)(MouseDispatcher)
