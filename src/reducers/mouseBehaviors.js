export const MOUSE_MOVED = 'MOUSE_MOVED'

export const mouseCoordinates = (x, y) => ({
	type: MOUSE_MOVED,
	x,
	y
})

const initialState = {
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
