import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Calendar from 'components/calendar/Calendar'

const CalendarView = () => (
	<div>
		<Link to="/" title="Go Back">{'<'} Go Back</Link>
		<Calendar />
	</div>
)

export default CalendarView
