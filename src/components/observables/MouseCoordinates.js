import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class MouseCoordinates extends PureComponent {
	static propTypes = {
		x: PropTypes.number,
		y: PropTypes.number,
	};

	static defaultProps = {
		x: 0,
		y: 0,
	};

	render() {
		const { x, y } = this.props
		return (
			<div>
				<span>x: {x}</span>
				<span> </span>
				<span>y: {y}</span>
			</div>
		)
	}
}

export default (
	connect(
		({ mouseBehaviors }) => ({
			x: mouseBehaviors.x,
			y: mouseBehaviors.y,
		})
	)(
		MouseCoordinates
	)
)
