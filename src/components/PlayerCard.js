import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const PlayerCard = props => {
	console.log('wtf? props: ', props);
	const { playerName, image, active, inField, franchisePossible, franchiseRound } = props;

	return (
		// wrap in a clickable link to player stats page
		<div>
			{/* send image to Avatar component */}
			<p>{image}</p>
			<p>{playerName}</p>
			<p>{active}</p>
			<p>{inField}</p>
			<p>{franchisePossible && franchiseRound}</p>
		</div>
	);
};

export default PlayerCard;
