import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const dotSize = 6

const styles = {
	dot: {
		width: `${dotSize}px`,
		height: `${dotSize}px`,
		backgroundColor: 'black',
	}
}

const getLocationStyle = coordinate => (
	`${coordinate - dotSize / 2}px`
)

export const MouseLocation = ({ x, y }) => (
	<div style={{
		position: 'absolute',
		top: getLocationStyle(y),
		left: getLocationStyle(x),
	}}>
		<div style={styles.dot} />
	</div>
)

const mapStateToProps = ({ mouseBehaviors }) => ({
	x: mouseBehaviors.x,
	y: mouseBehaviors.y,
})

MouseLocation.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(MouseLocation)
