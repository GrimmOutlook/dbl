import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LayoutStandard from '../../components/LayoutStandard';
import PlayerCard from '../../components/PlayerCard';
import TeamOwnerCard from '../../components/TeamOwnerCard';

const playerInfo = [
	{
		playerName: 'Scottie Scheffler',
		image: 'www.ss-image.com',
		active: true,
		inField: true,
		franchisePossible: false,
		franchiseRound: '8th',
	},
	{
		playerName: 'Sam Burns',
		image: 'www.sb-image.com',
		active: true,
		inField: true,
		franchisePossible: true,
		franchiseRound: '8th',
	},
];

const teamOwnerInfo = {
	teamName: 'Long Drivers',
	ownerName: 'Dave Grimm',
	ownerEmail: 'grimmoutlook87@gmail.com',
	logo: 'www.logoUrl.com',
	standingsPosition: 3,
	tinCupPoints: 1200,
	waiverPosition: 4,
};

const TeamDashboard = () => (
	<LayoutStandard>
		<nav className="dashboard-side-nav">
			<h1>Roster</h1>
			<h1>Add / Drop</h1>
			<h1>Stats</h1>
			<h1>Settings</h1>
			<h1>Past Results</h1>
		</nav>
		<div>
			{playerInfo.map(player => (
				<PlayerCard
					playerName={player.playerName}
					image={player.image}
					active={player.active}
					inField={player.inField}
					franchisePossible={player.franchisePossible}
					franchiseRound={player.franchiseRound}
					key={player.playerName}
				/>
			))}
		</div>
		<div>
			<TeamOwnerCard
				teamName={teamOwnerInfo.teamName}
				ownerName={teamOwnerInfo.ownerName}
				ownerEmail={teamOwnerInfo.ownerEmail}
				logo={teamOwnerInfo.logo}
				standingsPosition={teamOwnerInfo.standingsPosition}
				tinCupPoints={teamOwnerInfo.tinCupPoints}
				waiverPosition={teamOwnerInfo.waiverPosition}
			/>
		</div>
	</LayoutStandard>
);

export default TeamDashboard;
