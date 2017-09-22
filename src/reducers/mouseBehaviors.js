export const MOUSE_MOVED = 'MOUSE_MOVED'

export const mouseCoordinates = (x, y) => ({
	type: MOUSE_MOVED,
	x,
	y
})

export default (state = {}, action) => {
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
