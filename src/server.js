const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000 ;

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/partida', (req, res) => {
	res.json({
		date: 1646334000000,
		team1: {
			logo: 'https://api-v3.draft5.gg/teams/743/logo',
			name: 'Imperial'
		},
		team2: {
			logo: 'https://www.hltv.org/img/static/team/placeholder.svg',
			name: 'Indefinido'
		},
		format: {
			type: 'bo1'
		},
		event: {
			name: 'PGL Major Antwerp 2022: American RMR - South American Open Qualifier #1'
		},
		streams: [
			{
				name: "Gaules",
				link: "https://player.twitch.tv/?channel=gaules&autoplay=true&parent=www.hltv.org"
			},
			{
				name: "ale_apoka",
				link: "https://player.twitch.tv/?channel=ale_apoka&autoplay=true&parent=www.hltv.org"
			},
		]
	})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));