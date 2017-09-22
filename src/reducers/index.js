import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import calendar from 'reducers/calendar'
import mouseBehaviors from 'reducers/mouseBehaviors'
import pageMeta from 'reducers/pageMeta'

export default combineReducers({
	calendar,
	mouseBehaviors,
	pageMeta,
	router,
})
