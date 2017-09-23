import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import AutosizeText from './AutosizeText'
import renderStyles from 'renderers/renderStyles'

import {
	selectDate,
	changeToPrevMonth,
	changeToNextMonth,
} from 'reducers/calendar'

class Calendar extends PureComponent {
	static propTypes = {
		dispatch: PropTypes.func,
		selectedDate: PropTypes.number,
		selectedMonth: PropTypes.number,
		selectedYear: PropTypes.number,
		visibleMonth: PropTypes.number,
		visibleYear: PropTypes.number,
	};

	static defaultProps = {
		selectedDate: Calendar.getCurrentDate(),
		selectedMonth: Calendar.getCurrentMonth(),
		selectedYear: Calendar.getCurrentYear(),
		visibleMonth: Calendar.getCurrentMonth(),
		visibleYear: Calendar.getCurrentYear(),
	};

	static getCurrentYear() {
		return new Date().getFullYear()
	}

	static getCurrentMonth() {
		return new Date().getMonth() + 1
	}

	static getCurrentDate() {
		return new Date().getDate()
	}

	handleChangePrevMonthView = () => {
		const { dispatch, visibleYear, visibleMonth } = this.props
		dispatch(changeToPrevMonth(visibleYear, visibleMonth))
	};

	handleChangeNextMonthView = () => {
		const { dispatch, visibleYear, visibleMonth } = this.props
		dispatch(changeToNextMonth(visibleYear, visibleMonth))
	};

	handleDateSelection = date => {
		const { dispatch, visibleYear, visibleMonth } = this.props
		dispatch(selectDate(visibleYear, visibleMonth, date))
	};

	getDatesInMonth() {
		const { visibleYear, visibleMonth } = this.props
		return new Date(visibleYear, visibleMonth, 0).getDate()
	}

	getStartingDayInMonth() {
		const { visibleYear, visibleMonth } = this.props
		return new Date(visibleYear, visibleMonth - 1, 1).getDay()
	}

	renderLabels() {
		const { visibleYear, visibleMonth } = this.props
		return (
			<AutosizeText
				container={this}
				siblingsWidthLocation={[0, 0]}
				siblingsHeightLocation={[0, 0]}
				mapStateToProps={() => state => ({
					visibleMonth: state.calendar.visibleMonth,
					visibleYear: state.calendar.visibleYear,
				})}
			>
				<div className="calendar__labels">
					<div className="calendar__label__month">{visibleMonth}</div>
					<div className="calendar__label__year">{visibleYear}</div>
				</div>
			</AutosizeText>
		)
	}

	renderCalendar() { return (
		<div className="calendar__month">
			{Array.from({ length: this.getStartingDayInMonth() }, (v, k) => {
				return this.renderDate(`${k}-padding`)
			})}
			{Array.from({ length: this.getDatesInMonth() }, (_, date) => {
				return this.renderDate(date, date + 1)
			})}
		</div>
	)}

	renderDate(key, date = '') {
		const { selectedDate, selectedMonth, selectedYear, visibleMonth, visibleYear } = this.props
		const isSelected = selectedDate === date && selectedMonth === visibleMonth && selectedYear === visibleYear
		return (
			<div
				key={key}
				className={`calendar__date ${isSelected ? 'is-selected' : ''}`}
				onClick={this.handleDateSelection.bind(this, date)}
			>
				{date}
			</div>
		)
	}

	renderControls() { return (
		<div className="calendar__controls">
			<div className="calendar__control calendar__control__prev" onClick={this.handleChangePrevMonthView}>{'<'}</div>
			<div className="calendar__control calendar__control__next" onClick={this.handleChangeNextMonthView}>{'>'}</div>
		</div>
	)}

	render() { return (
		<div className="calendar">
			{this.renderLabels()}
			{this.renderControls()}
			{this.renderCalendar()}
		</div>
	)}
}

const mapStateToProps = ({ calendar }) => ({
	selectedDate: calendar.selectedDate,
	selectedMonth: calendar.selectedMonth,
	selectedYear: calendar.selectedYear,
	visibleMonth: calendar.visibleMonth,
	visibleYear: calendar.visibleYear,
})

export default (
	connect(
		mapStateToProps
	)(
		renderStyles(require('./Calendar.styl'))(Calendar)
	)
)
