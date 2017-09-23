import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import calendar from 'reducers/calendar'
import mouseBehaviors, { mouseBehaviorsEpic } from 'reducers/mouseBehaviors'
import pageMeta from 'reducers/pageMeta'

export const rootEpic = combineEpics(
	mouseBehaviorsEpic,
)

export const rootReducer = combineReducers({
	calendar,
	mouseBehaviors,
	pageMeta,
	router,
})
