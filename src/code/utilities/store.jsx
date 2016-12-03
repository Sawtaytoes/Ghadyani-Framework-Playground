import { compose, applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import rootReducer, { rootEpic } from 'reducers'
import { getInitialState } from 'utilities/initial-state'

const initialState = getInitialState()
const history = createBrowserHistory()

const middlewares = [
	// createEpicMiddleware(rootEpic)
]

const store = compose(applyMiddleware(...middlewares))
	(window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)
	(rootReducer, initialState)

module.hot && module.hot.accept('reducers', () => {
	store.replaceReducer(require('reducers'))
})

syncHistoryWithStore(history, store)

export {
	history,
	store,
}
