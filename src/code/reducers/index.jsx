import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Reducers
import calendar from 'reducers/calendar'
import locationChange from 'reducers/location-change'
import tap from 'reducers/tap'

export default combineReducers({
	calendar,
	locationChange,
	tap,
	routing: routerReducer,
})
