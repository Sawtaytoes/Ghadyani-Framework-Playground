import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Rx from 'rxjs/Rx'
import { connect } from 'react-redux'

// Actions
import {
	mouseCoordinates,
} from 'reducers/mouseBehaviors'

// Utilities
import StylesLoader from 'components/styles-loader/StylesLoader'

// Styles
const stylesLoader = StylesLoader.create()

class MouseCoordinates extends PureComponent {
	static propTypes = {
		dispatch: PropTypes.func,
		x: PropTypes.number,
		y: PropTypes.number,
	};

	static defaultProps = {
		x: 0,
		y: 0,
	};

	componentWillMount() {
		this.initMouseMove()
	}

	initMouseMove() {
		const { dispatch } = this.props
		this.mouseMove$ = Rx.Observable.fromEvent(document, 'mousemove')

		this.mouseMove$.subscribe(
			e => dispatch(mouseCoordinates(e.clientX, e.clientY)),
			err => console.error(err),
			() => console.log('Finished caring about mouse movements.'),
		)
	}

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

export default connect(({ mouseBehaviors }) => ({
	x: mouseBehaviors.x,
	y: mouseBehaviors.y,
}))(stylesLoader.render(MouseCoordinates))
