import Rx from 'rxjs/Rx'
// import { EPIC_END } from 'redux-observable'

export const END_CAPTURE = 'MOUSE_BEHAVIORS::END_CAPTURE'
export const MOUSE_MOVED = 'MOUSE_BEHAVIORS::MOUSE_MOVED'
export const START_CAPTURE = 'MOUSE_BEHAVIORS::START_CAPTURE'

export const endMouseCapture = () => ({
	type: END_CAPTURE,
})

export const startMouseCapture = () => ({
	type: START_CAPTURE,
})

export const updateMouseLocation = (x, y) => ({
	type: MOUSE_MOVED,
	x,
	y,
})

export const mouseBehaviorsEpic = action$ => (
	action$
	.ofType(START_CAPTURE)
	.mergeMap(() => (
		Rx.Observable
		.fromEvent(document, 'mousemove')
		.throttleTime(1/60 * 1000)
		.map(
			({ clientX, clientY }) => updateMouseLocation(clientX, clientY)
		)
		.takeUntil(action$.ofType(END_CAPTURE))
	))
)

// Get Framerate
// const step = ([pastTime]) => timestamp => {
// 	const presentTime = new Date
// 	const fps = 1000 / (presentTime - pastTime)

// 	console.debug(fps)
// 	window.requestAnimationFrame(step(pastTime))
// 	return presentTime
// }

// // Array(30).fill(window.requestAnimationFrame)
// [...Array(30)].map(window.requestAnimationFrame)
// [...Array(30)].reduce(step, window.requestAnimationFrame(step([new Date]))

// window.requestAnimationFrame(step(pastTime))

export const initialState = {
	x: 0,
	y: 0,
}

export default (state = initialState, action) => {
	const {
		type,
		x,
		y,
	} = action

	switch (type) {
	case MOUSE_MOVED:
		return {
			...state,
			x,
			y
		}

	default:
		return state
	}
}
