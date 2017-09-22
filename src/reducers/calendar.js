export const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE'
export const CHANGE_VISIBLE_MONTH = 'CHANGE_VISIBLE_MONTH'

export const selectDate = (selectedYear, selectedMonth, selectedDate) => ({
	type: CHANGE_SELECTED_DATE,
	selectedYear,
	selectedMonth,
	selectedDate
})

export const changeToPrevMonth = (currentYear, currentMonth) => {
	const date = new Date(currentYear, currentMonth - 1, 1)
	console.log('month', date.getMonth());

	return {
		type: CHANGE_VISIBLE_MONTH,
		visibleMonth: date.getMonth() || 12,
		visibleYear: date.getMonth() ? date.getFullYear() : currentYear - 1,
	}
}

export const changeToNextMonth = (currentYear, currentMonth) => {
	const date = new Date(currentYear, currentMonth + 1, 1)
	console.log('month', date.getMonth());

	return {
		type: CHANGE_VISIBLE_MONTH,
		visibleMonth: date.getMonth() || 12,
		visibleYear: date.getMonth() ? date.getFullYear() : currentYear,
	}
}

const initialState = {}
export const getNumberCountersInitialState = () => initialState

export default (state = initialState, action) => {
	const {
		type,
		selectedDate,
		selectedMonth,
		selectedYear,
		visibleMonth,
		visibleYear,
	} = action

	switch (type) {
	case CHANGE_SELECTED_DATE:
		return {
			...state,
			selectedYear,
			selectedMonth,
			selectedDate,
		}

	case CHANGE_VISIBLE_MONTH:
		return {
			...state,
			visibleMonth,
			visibleYear,
		}

	default:
		return state
	}
}
