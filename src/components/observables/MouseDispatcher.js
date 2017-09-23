import PropTypes from 'prop-types'
import { PureComponent } from 'react'
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

	render() {
		return null
	}
}

const mapDispatchToProps = {
	endMouseCapture,
	startMouseCapture,
}

export default connect(null, mapDispatchToProps)(MouseDispatcher)
