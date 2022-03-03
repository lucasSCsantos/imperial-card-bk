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
		// date: 'Indeterminada', //se for ao vivo tira o date
		team1: {
			logo: 'https://api-v3.draft5.gg/teams/743/logo',
			name: 'Imperial'
		},
		team2: {
			logo: 'https://distribution.faceit-cdn.net/images/8d278bb0-b45b-4aed-8021-fe577ad5de79.jpeg',
			name: 'BENEATH VBET'
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
			// {
			// 	name: "BT0",
			// 	link: "https://player.twitch.tv/?channel=bt0tv&autoplay=true&parent=www.hltv.org"
			// },
			{
				name: "MCH",
				link: "https://player.twitch.tv/?channel=mch_agg&autoplay=true&parent=www.hltv.org"
			},
		]
	})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));