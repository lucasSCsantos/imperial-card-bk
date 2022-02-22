const express = require('express');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const getSupportersMiddleware = require('./middlewares/getSupporters');
const { validateState, validateAge, validateEmail, validateCity, validateName } = require('./middlewares/validations');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000 ;
const SUPPORTER = 'src/supporters.json';

app.use(cors())
app.use(bodyParser.json());
app.use(getSupportersMiddleware);

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/supporters', validateState, validateAge, validateEmail, validateCity, validateName, (req, res) => {
	const { data, body } = req;
	const { name, city, state, email, age } = body;
	const id = data.length + 1;
	data.push({ id, name, city, state, email, age });
	fs.writeFile(SUPPORTER, JSON.stringify(data))
		.then(() => {
			res.status(201).json({ id, name, city, state, email, age });
		})
		.catch((err) => {
			res.status(400).json({ message: `Erro ao escrever o arquivo: ${err.message}` });
		});
});

app.get('/supporters', (req, res) => {
	const { data } = req;
	res.status(200).json(data)
})

app.get('/supporters/search', (req, res) => {
	const { data } = req;
	const { email } = req.query;
	const supporter = data.find((fan) => fan.email === email);
	if (supporter) {
		return res.status(200).json(supporter);
	}
	res.status(404).json({ message: "Supporter não existe" })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));