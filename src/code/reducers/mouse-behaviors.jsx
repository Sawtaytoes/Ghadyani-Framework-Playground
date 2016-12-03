import {
	MOUSE_MOVED,
} from 'actions/mouse-behaviors'

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
