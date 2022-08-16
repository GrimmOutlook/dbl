import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const TeamOwnerCard = props => {
	console.log('TeamOwnerCard props wtf????: ', props);
	const { teamName, ownerName, ownerEmail, logo, standingsPosition, tinCupPoints, waiverPosition } = props;

	return (
		//
		<div>
			{/* send logo to Avatar component */}
			<p>{logo}</p>
			<p>{teamName}</p>
			<p>{ownerName}</p>
			<p>{ownerEmail}</p>
			<p>{standingsPosition}</p>
			<p>{tinCupPoints}</p>
			<p>{waiverPosition}</p>
		</div>
	);
};

export default TeamOwnerCard;
