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
		date: 1646420400000,
		team1: {
			logo: 'https://api-v3.draft5.gg/teams/743/logo',
			name: 'Imperial'
		},
		team2: {
			logo: 'https://www.hltv.org/img/static/team/placeholder.svg',
			name: 'A definir'
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
				name: "Apoka",
				link: "https://player.twitch.tv/?channel=ale_apoka&autoplay=true&parent=www.hltv.org"
			},
			{
				name: "BT0",
				link: "https://player.twitch.tv/?channel=bt0tv&autoplay=true&parent=www.hltv.org"
			},
			{
				name: "MCH",
				link: "https://player.twitch.tv/?channel=mch_agg&autoplay=true&parent=www.hltv.org"
			},
		]
	})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));