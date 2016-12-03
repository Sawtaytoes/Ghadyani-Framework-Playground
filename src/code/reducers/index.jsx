import { combineReducers } from 'redux'
// import { combineEpics } from 'redux-observable'
import { routerReducer } from 'react-router-redux'

// Reducers
import calendar from 'reducers/calendar'
import locationChange from 'reducers/location-change'
import mouseBehaviors from 'reducers/mouse-behaviors'
import tap from 'reducers/tap'

// export const rootEpic = combineEpics({
// 	// pingEpic
// })

export default combineReducers({
	calendar,
	locationChange,
	mouseBehaviors,
	tap,
	routing: routerReducer,
})
