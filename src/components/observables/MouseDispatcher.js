import PropTypes from 'prop-types'
import { PureComponent } from 'react'
// import Rx from 'rxjs/Rx'
import { connect } from 'react-redux'

import {
	endMouseCapture,
	startMouseCapture,
} from 'reducers/mouseBehaviors'

export class MouseDispatcher extends PureComponent {
	static propTypes = {
		endMouseCapture: PropTypes.func.isRequired,
		startMouseCapture: PropTypes.func.isRequired,
	}

	componentDidUpdate() {
		this.props.endMouseCapture()
		this.props.startMouseCapture()
	}

	componentWillMount() {
		this.props.startMouseCapture()
	}

	componentWillUnmount() {
		this.props.endMouseCapture()
	}

	// subscribeToMouseMove() {
	// 	const { updateMouseLocation } = this.props

	// 	this.mouseMove$ = (
	// 		Rx.Observable
	// 		.fromEvent(document, 'mousemove')
	// 		// .take(4)
	// 		// .debounceTime(250)
	// 	)

	// 	this.mouseMoveUnsubscribe = (
	// 		this.mouseMove$.subscribe(
	// 			({ clientX, clientY }) => updateMouseLocation(clientX, clientY),
	// 			console.error,
	// 			() => console.log('Done caring about mouse movements.'),
	// 		)
	// 	)
	// }

	render() {
		return null
	}
}

const mapDispatchToProps = {
	endMouseCapture,
	startMouseCapture,
}

export default connect(null, mapDispatchToProps)(MouseDispatcher)
