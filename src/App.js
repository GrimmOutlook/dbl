import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import TeamDashboard from './routes/team-dashboard/TeamDashboard';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/team-dashboard" component={TeamDashboard} />
		</Switch>
	</Router>
);

export default App;
