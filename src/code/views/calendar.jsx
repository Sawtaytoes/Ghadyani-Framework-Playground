import React from 'react'
import { Link } from 'react-router'

// Components
import Calendar from 'components/calendar'

const CalendarView = () => (
	<div>
		<Link to="/" title="Go Back">{'<'} Go Back</Link>
		<Calendar />
	</div>
)

export default CalendarView
