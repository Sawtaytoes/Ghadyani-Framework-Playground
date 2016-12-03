import {
	CHANGE_SELECTED_DATE,
	CHANGE_VISIBLE_MONTH,
} from 'actions/calendar'

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
