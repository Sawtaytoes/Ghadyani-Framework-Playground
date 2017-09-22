export const MOUSE_MOVED = 'MOUSE_BEHAVIORS::MOUSE_MOVED'

export const updateMouseLocation = (x, y) => ({
	type: MOUSE_MOVED,
	x,
	y,
})

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
