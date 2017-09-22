import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Calendar from 'components/pages/Calendar'
import Home from 'components/pages/Home'
import NoMatch from 'components/pages/NoMatch'
import RxObservables from 'components/pages/RxObservables'
import SiteLayout from 'components/site-layout/SiteLayout'

const Pages = () => (
	<SiteLayout>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/calendar" component={Calendar} />
			<Route path="/rx-observables" component={RxObservables} />
			<Route component={NoMatch} />
		</Switch>
	</SiteLayout>
)

export default Pages
