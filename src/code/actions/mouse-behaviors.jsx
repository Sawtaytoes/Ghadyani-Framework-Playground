export const MOUSE_MOVED = 'MOUSE_MOVED'

export const mouseCoordinates = (x, y) => ({
	type: MOUSE_MOVED,
	x,
	y
})
