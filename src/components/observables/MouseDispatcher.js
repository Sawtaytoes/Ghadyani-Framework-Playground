import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import Rx from 'rxjs/Rx'
import { connect } from 'react-redux'

import { updateMouseLocation } from 'reducers/mouseBehaviors'

export class MouseDispatcher extends PureComponent {
	static propTypes = {
		updateMouseLocation: PropTypes.func.isRequired,
	}

	componentDidUpdate() {
		this.unsubscribeFromMouseMove()
		this.subscribeToMouseMove()
	}

	componentWillMount() {
		this.subscribeToMouseMove()
	}

	componentWillUnmount() {
		this.unsubscribeFromMouseMove()
	}

	subscribeToMouseMove() {
		const { updateMouseLocation } = this.props

		this.mouseMove$ = (
			Rx.Observable
			.fromEvent(document, 'mousemove')
			// .take(4)
			// .debounceTime(250)
		)

		this.mouseMoveUnsubscribe = (
			this.mouseMove$.subscribe(
				({ clientX, clientY }) => updateMouseLocation(clientX, clientY),
				console.error,
				() => console.log('Done caring about mouse movements.'),
			)
		)
	}

	unsubscribeFromMouseMove() {
		this.mouseMoveUnsubscribe()
	}

	render() {
		return null
	}
}

const mapDispatchToProps = {
	updateMouseLocation,
}

export default connect(null, mapDispatchToProps)(MouseDispatcher)
