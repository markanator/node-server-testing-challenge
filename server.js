const express = require('express');
const todoRouter = require('./todos/todos-router');

const server = express();

server.use(express.json());

server.use('/todos', todoRouter);

server.get('/', (_, res) => {
	res.json({
		message: 'Welcome to my test-ful API',
	});
});

server.use((err, _, res, __) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

module.exports = server;
