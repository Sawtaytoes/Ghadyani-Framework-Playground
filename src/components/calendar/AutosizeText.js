import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

class AutosizeText extends PureComponent {
	static propTypes = {
		children: PropTypes.any,
		container: PropTypes.object.isRequired,
		siblingsWidthLocation: PropTypes.array,
		siblingsHeightLocation: PropTypes.array,
		listener: PropTypes.func,
		unlistener: PropTypes.func,
	};

	static defaultProps = {
		siblingsWidthLocation: [],
		siblingsHeightLocation: [],
		listener: callback => window.addEventListener('resize', callback),
		unlistener: callback => window.removeEventListener('resize', callback),
	};

	constructor() {
		super()

		this.fontSize = {
			low: 0,
			high: 0,
		}

		this.boundAutoSizeText = this.autoSizeText.bind(this)
	}

	componentDidMount() {
		this.autoSizeText()
		this.props.listener(this.boundAutoSizeText)
	}

	componentWillUnmount() {
		this.props.unlistener(this.boundAutoSizeText)
	}

	componentDidUpdate() {
		this.autoSizeText()
	}

	storeDOMNode(el) {
		this.el = el
	}

	autoSizeText() {
		const child = this.el
		const parent = findDOMNode(this.props.container)

		const parentWidth = parent.clientWidth
		const parentHeight = parent.clientHeight

		this.setFontSize(child, parentHeight)

		const fontSizeDecrement = 20
		for (let count = 0; count < 256; count++) {
			const siblingsWidth = this.getSiblingsDimension(parent, 'Width')
			const siblingsHeight = this.getSiblingsDimension(parent, 'Height')

			if (siblingsHeight > parentHeight || siblingsWidth > parentWidth) {
				this.setFontSize(child, this.getFontSize(child) - fontSizeDecrement)
			} else {
				break
			}
		}
	}

	getSiblingsDimension(parent, dimention) {
		const siblingsLocation = this.props[`siblings${dimention}Location`]

		let siblings = parent.children
		siblingsLocation.forEach(siblingIndex => {
			siblings = siblings[siblingIndex].children
		})

		let totalLength = 0
		Array.from(siblings).forEach(sibling => totalLength += sibling[`client${dimention}`])
		return totalLength
	}

	getFontSize(el) {
		return document.defaultView.getComputedStyle(el, null).getPropertyValue('font-size').replace(/px/, '')
	}

	setFontSize(el, fontSize) {
		el.style.fontSize = `${fontSize}px`
	}

	render() { return (
		<span ref={el => this.storeDOMNode(el)} style={{ display: 'block', lineHeight: 1 }}>
			{this.props.children}
		</span>
	)}
}

export default connect((_, initialProps) => initialProps.mapStateToProps(initialProps))(AutosizeText)
