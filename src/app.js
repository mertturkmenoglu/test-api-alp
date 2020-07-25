const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
	console.log("Request to root");
	res.send({
		"message": "Welcome to test API"
	});
});

app.post('/product', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

const port = process.env.PORT || 3400;
app.listen(port, () => {
	console.log(`Listening ${port}`);
});